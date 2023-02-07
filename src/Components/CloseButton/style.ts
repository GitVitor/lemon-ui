import styled from "styled-components";

export const Button = styled.button`
  ${({ theme }) => `
    background-color: transparent;
    outline: none;
    border: none;
    padding: ${theme.space(1)}px;
    height: 30px;
    width: 30px;
  `}
`;
