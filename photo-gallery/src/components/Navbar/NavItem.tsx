import React, { useEffect, useRef, useState } from "react";
import { AccountCircle, ArrowOutward, CopyAll } from "@mui/icons-material";
import { Anchor, ItemContainer, KeyboardItem } from "./styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Popover, Tooltip } from "@mui/material";
import Popup from "../popup";

type NavItemProps = {
  icon: JSX.Element;
  text: string;
  letter: string;
  href: string;
  contact?: boolean;
  className?: string;
};

const NavItem: React.FC<NavItemProps> = ({
  className,
  icon,
  text,
  letter,
  href,
  contact = false,
}) => {
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied
  const [isActive, setIsActive] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 2000); // Reset status after 2 seconds
  };
  useEffect(() => {
    if (window.location.pathname === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isActive]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "E" || event.key === "e") {
        navigator.clipboard.writeText("saitejavarmaj30@gmail.com").then(() => {
          onCopyText();
        });
      }
      // Check if the pressed key is 'A' (you can change this to any key)
      else if (event.key === letter || event.key === letter.toLowerCase()) {
        window.location.href = `${href.toLowerCase()}`; // Replace with your desired URL
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (text.toLowerCase() === "email") {
    return (
      <>
        <label className="flex align-center items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase text-xs tracking-widest text-text/50 font-semibold ml-3 my-2">
          Connect
        </label>
        <ItemContainer className="nav-item">
          <CopyToClipboard
            text={"saitejavarmaj30@gmail.com"}
            onCopy={onCopyText}
          >
            <div
              className="group gap-3 flex align-center items-center whitespace-nowrap text-base sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus hover:bg-accent/10 active:bg-accent/20 focus:ring-1 ring-inset focus:ring-accent/30 focus:bg-accent/05 disabled:pointer-events-none disabled:opacity-50 text-text px-3 py-2 rounded-lg w-full justify-start false"
              data-hotkey="o"
            >
              {icon}
              <p className="col-span-5">{text}</p>

              {contact && (
                <>
                  <CopyAll color="inherit" opacity="0.3" />
                  <Popup content="Copied!" isVisible={copyStatus} />
                </>
              )}

              <Tooltip title={`Press ${letter} to copy ${text}`}>
                <KeyboardItem
                  className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
                  data-state="closed"
                >
                  {letter}
                </KeyboardItem>
              </Tooltip>
            </div>
          </CopyToClipboard>
        </ItemContainer>
      </>
    );
  } else if (href.toLowerCase() === "/") {
    return (
      <>
        <ItemContainer className="nav-item">
          <Anchor
            className="group gap-3 flex align-center items-center whitespace-nowrap text-base sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus hover:bg-accent/10 active:bg-accent/20 focus:ring-1 ring-inset focus:ring-accent/30 focus:bg-accent/05 disabled:pointer-events-none disabled:opacity-50 text-text px-3 py-2 rounded-lg w-full justify-start false"
            data-hotkey="o"
            href={`${href.toLowerCase()}`}
            currentlocation={isActive}
          >
            <p className="col-span-5">{text}</p>
            {contact && <ArrowOutward color="inherit" />}
            <Tooltip title={`Press ${letter} for Home`}>
              <KeyboardItem
                className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
                data-state="closed"
              >
                {letter}
              </KeyboardItem>
            </Tooltip>
          </Anchor>
        </ItemContainer>
        <label className="flex align-center items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase text-xs tracking-widest text-text/50 font-semibold ml-3 my-2">
          Browse
        </label>
      </>
    );
  } else {
    return (
      <ItemContainer className="nav-item">
        <Anchor
          className="group gap-3 flex align-center items-center whitespace-nowrap text-base sm:text-sm font-medium focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 text-text h-11 px-3 py-2 rounded-lg w-full justify-start false"
          data-hotkey="o"
          href={`${href.toLowerCase()}`}
          currentlocation={isActive}
        >
          {icon}
          <p className="col-span-4">{text}</p>
          {contact && (
            <ArrowOutward color="inherit" opacity="0.3" fontSize="small" />
          )}
          <Tooltip title={`Press ${letter} for ${text}`}>
            <KeyboardItem
              className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
              data-state="closed"
            >
              {letter}
            </KeyboardItem>
          </Tooltip>
        </Anchor>
      </ItemContainer>
    );
  }
};

export default NavItem;
