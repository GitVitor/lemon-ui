import styled from "styled-components";

export const Container = styled.section`
  ${({ theme }) => `
    margin: 0 auto;

    padding: ${theme.space(8)}px 0px;

    ${theme.breakpoints.down("xs")} {
      width: 100%
    };

    ${theme.breakpoints.up("sm")} {
      width: 75%
    };

    ${theme.breakpoints.up("md")} {
      width: 50%
    };

    ${theme.breakpoints.up("lg")} {
      width: 25%
    };

  `}
`;
