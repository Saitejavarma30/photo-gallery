import styled from "styled-components";
import { theme } from "../../../themes/constats";

export const LatLonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.cream};
`;

export const WeatherIconContainer = styled.div`
  font-size: 24px;
`;
export const WeatherDescContainer = styled.div`
  font-size: 10px;
`;

export const WeatherTempContainer = styled.div`
  font-size: 64px;
`;

export const WeatherTempSymbolContainer = styled.div`
  font-size: 24px;
`;

export const GreyText = styled.span`
  opacity: 0.4;
`;
