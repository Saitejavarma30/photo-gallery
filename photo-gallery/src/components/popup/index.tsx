import React, { ReactNode } from "react";
import { PopupBody, PopupContent, PopupOverlay } from "./styles";
import { CheckCircle } from "@mui/icons-material";
import { theme } from "../../themes/constats";

// Define the props for the Popup component
interface PopupProps {
  content: ReactNode;
  isVisible: boolean;
}

const Popup: React.FC<PopupProps> = ({ content, isVisible }) => {
  if (!isVisible) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CheckCircle sx={{ color: theme.colors.green }} fontSize="small" />
        <PopupBody className="p-2">{"Email copied to Clipboard!"}</PopupBody>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
