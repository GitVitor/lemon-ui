import { DefaultTheme } from "styled-components";

const breakpoints: { [key: string]: number } = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const theme: DefaultTheme = {
  color: {
    primary: "#008059",
    secondary: "#8affb6",
    white: "#fff",
    black: "#000",
  },
  space: (size: number) => {
    return size * 4;
  },
  breakpoints: {
    up: (key) => {
      return `@media (min-width: ${breakpoints[key]}px)`;
    },
    down: (key) => {
      return `@media (max-width: ${breakpoints[key] - 1}px)`;
    },
  },
};
