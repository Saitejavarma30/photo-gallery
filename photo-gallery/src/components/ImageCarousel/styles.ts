import { theme } from "./../../themes/constats";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  position: absolute; /* Position this absolutely within the parent */
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ImageCarouselHolder = styled.div`
  border-radius: 24px;
  background-color: ${theme.colors.grey};
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImageTextNumber = styled.div`
  position: absolute;
  right: 10px;
  opacity: 1;
  font-family: "Grey Qo", cursive;
  font-style: italic;
  background-color: ${theme.colors.cream};
  color: ${theme.colors.black};
`;

export const ImageTextContent = styled.div`
  position: absolute;
  left: 10px;
  opacity: 1;
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-optical-sizing: auto;
  background-color: ${theme.colors.cream};
  color: ${theme.colors.black};
`;

export const CarouselControlContainer = styled.div`
  z-index: 100;
  position: relative;
  width: 100%;
  display: flex;
`;

export const ImageCardContainer = styled.div`
  max-width: 80px;
  align-self: center;
  height: 50px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  z-index: 1;
  flex: 2;
  cursor: pointer;
`;

export const ImageNavigatorContainer = styled.div`
  flex: 1;
`;
