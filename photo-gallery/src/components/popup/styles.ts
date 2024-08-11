import styled, { keyframes } from "styled-components";
import { theme } from "../../themes/constats";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/* Popup.css */
export const PopupOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  max-width: max-content;
  width: 100%;
  background-color: ${theme.colors.grey};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeInAnimation} 0.3s ease-in-out;
`;

export const PopupBody = styled.div``;
