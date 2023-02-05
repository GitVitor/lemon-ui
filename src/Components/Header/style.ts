import styled from "styled-components";

export const Header = styled.div`
  ${({ theme }) => `
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0px ${theme.space(6)}px;

    > * {
      flex-basis: 100%;
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  justify-content: flex-start;

  svg {
    height: ${theme.space(8)}px;
    align-self: center;
  }`}
`;

export const MenuIconWrapper = styled.div`
  ${({ theme }) => `
  display: flex;
  justify-content: flex-end;

  svg {
    height: ${theme.space(4)}px;
    align-self: center;
  }`}
`;
