import styled from "styled-components";
import { Container as OriginalContainer } from "../../Components/Container";

export const Container = styled(OriginalContainer)`
  ${({ theme }) => `
  background-color: #008059;
  height: 100%;

  padding: ${theme.space(2)}px;

  header,
  p {
    color: white;
    font-weight: bold;
    padding: ${theme.space(4)}px;
  }

  p {
    line-height: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  header {
    margin: ${theme.space(16)}px 0 ${theme.space(4)}px;

    svg {
      height: 24px;
      color: #8affb6;
      margin-bottom: ${theme.space(4)}px;

    }
  }
  `}
`;
