import styled from "styled-components";
import { theme } from "../../themes/constats";

export const NavbarContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
`;

export const NavSideBar = styled.nav`
  border-color: ${theme.colors.grey};
  /* border: 1px solid; */
  height: max-content;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;
  justify-content: center;
  padding: auto;
  color: ${theme.colors.white};

  li {
    color: ${theme.colors.white};
  }
`;
export const KeyboardItem = styled.kbd`
  background-color: ${theme.colors.grey};
  opacity: 1;
  border-color: ${theme.colors.white};
  color: ${theme.colors.gold};
  border: 1px solid;
  padding: 0;
  color: ${theme.colors.cream};
`;

export const ItemContainer = styled.li`
  :hover {
    opacity: "1";
    border-color: ${theme.colors.white};
    color: ${theme.colors.gold};
  }
`;

export const Anchor = styled.a<{ currentLocation: boolean }>`
  color: ${(props) => (props.currentLocation ? `${theme.colors.aqua}` : "")};
`;
