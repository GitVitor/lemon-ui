import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 20px 24px;

  > * {
    flex-basis: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  svg {
    height: 32px;
    align-self: center;
  }
`;

export const MenuIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    height: 16px;
    align-self: center;
  }
`;
