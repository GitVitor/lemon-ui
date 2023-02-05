import "styled-components";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

declare module "styled-components" {
  export interface DefaultTheme {
    space: (number) => number;

    breakpoints: {
      up: (key: Breakpoint) => string;
      down: (key: Breakpoint) => string;
    };
  }
}
