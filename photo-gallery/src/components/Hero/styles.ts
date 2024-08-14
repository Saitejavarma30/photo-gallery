import { theme } from "./../../themes/constats";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100%;
  color: ${theme.colors.cream};
  position: relative;
  scrollbar-width: none;
`;

export const GreetingContainer = styled.div`
  color: ${theme.colors.cream};
  display: flex;
`;

export const HeroHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90%;
`;
export const Heroheader = styled.h1`
  font-optical-sizing: auto;
  flex: 1;
  font-weight: 400;
  font-style: normal;
  color: ${theme.colors.cream};
`;

export const HeroHeaderText = styled.span`
  color: ${theme.colors.gold};
`;

export const Greetingtext = styled.div``;
export const HeroContentContainer = styled.div``;

export const HeroLocationContainer = styled.div`
  border-color: ${theme.colors.grey};
  /* border: 1px solid; */
  border-radius: 20px;
  height: 280px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: auto;
  color: ${theme.colors.white};

  li {
    color: ${theme.colors.white};
  }
`;

export const HeroLangugageContainer = styled.div`
  border-color: ${theme.colors.grey};
  /* border: 1px solid; */
  border-radius: 20px;
  height: 280px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  padding: auto;
  color: ${theme.colors.white};

  li {
    color: ${theme.colors.white};
  }
`;

export const StaticImageContainer = styled.img`
  width: 100%;
  z-index: 10;
  position: relative;
`;
