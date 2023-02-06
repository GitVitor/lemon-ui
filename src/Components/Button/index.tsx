import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "white";
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = "primary" }) => `
    background-color: ${
      variant === "primary" ? theme.color.primary : theme.color.white
    };
    color: ${variant === "primary" ? theme.color.white : theme.color.black};
    padding: ${theme.space(4)}px;
    border: none;
  `}
`;
