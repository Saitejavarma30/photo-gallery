import React, { useEffect, useRef, useState } from "react";
import { AccountCircle, ArrowOutward, CopyAll } from "@mui/icons-material";
import { KeyboardItem } from "./styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Popover } from "@mui/material";
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

  const onCopyText = () => {
    console.log("here");
    setCopyStatus(true);
    setTimeout(() => {
      console.log(copyStatus);
      setCopyStatus(false);
    }, 2000); // Reset status after 2 seconds
  };
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
        <li className="nav-item">
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
              <KeyboardItem
                className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
                data-state="closed"
              >
                {letter}
              </KeyboardItem>
            </div>
          </CopyToClipboard>
        </li>
      </>
    );
  }
  if (href.toLowerCase() === "") {
    return (
      <>
        <li className="nav-item">
          <a
            className="group gap-3 flex align-center items-center whitespace-nowrap text-base sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus hover:bg-accent/10 active:bg-accent/20 focus:ring-1 ring-inset focus:ring-accent/30 focus:bg-accent/05 disabled:pointer-events-none disabled:opacity-50 text-text px-3 py-2 rounded-lg w-full justify-start false"
            data-hotkey="o"
            href={`${href.toLowerCase()}`}
          >
            <p className="col-span-5">{text}</p>
            {contact && <ArrowOutward color="inherit" />}
            <KeyboardItem
              className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
              data-state="closed"
            >
              {letter}
            </KeyboardItem>
          </a>
        </li>
        <label className="flex align-center items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase text-xs tracking-widest text-text/50 font-semibold ml-3 my-2">
          Browse
        </label>
      </>
    );
  } else {
    return (
      <li className="nav-item">
        <a
          className="group gap-3 flex align-center items-center whitespace-nowrap text-base sm:text-sm font-medium focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 text-text h-11 px-3 py-2 rounded-lg w-full justify-start false"
          data-hotkey="o"
          href={`${href.toLowerCase()}`}
        >
          {icon}
          <p className="col-span-4">{text}</p>
          {contact && (
            <ArrowOutward color="inherit" opacity="0.3" fontSize="small" />
          )}
          <KeyboardItem
            className="col-span-1 hidden sm:block text-text/60 bg-element/10 rounded ml-auto w-[2ch] uppercase font-mono text-xs text-center"
            data-state="closed"
          >
            {letter}
          </KeyboardItem>
        </a>
      </li>
    );
  }
};

export default NavItem;
