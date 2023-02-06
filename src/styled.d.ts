import "styled-components";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
    };
    space: (number) => number;

    breakpoints: {
      up: (key: Breakpoint) => string;
      down: (key: Breakpoint) => string;
    };
  }
}
