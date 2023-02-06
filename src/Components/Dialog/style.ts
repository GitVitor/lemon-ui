import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 0 1 100%;
`;

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  height: 100%;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const Dialog = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    padding: ${theme.space(8)}px 0;
  `}
`;

export const DialogHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.space(8)}px;
    padding: 0 ${theme.space(8)}px;
  `}
`;

export const DialogBody = styled.div`
  ${({ theme }) => `
    max-height: 70vh;
    margin: 0;
    padding: 0 ${theme.space(8)}px;
    overflow: scroll;
    overscroll-behavior: contain;
  `}
`;
