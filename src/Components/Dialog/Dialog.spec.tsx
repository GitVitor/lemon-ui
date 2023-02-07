import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dialog, { DialogProps } from "./";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme";

const setup = (props: DialogProps) => {
  const utils = render(<Dialog {...props} />, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
  const overlay = utils.getByTestId("overlay");
  const closeButton = utils.getByTestId("close-button");
  const dialog = utils.getByTestId("dialog");
  const dialogHeader = utils.getByTestId("dialog-header");
  const dialogTitle = utils.queryByTestId("dialog-title");
  const dialogBody = utils.getByTestId("dialog-body");
  return {
    ...utils,
    overlay,
    closeButton,
    dialog,
    dialogHeader,
    dialogTitle,
    dialogBody,
  };
};

describe("Dialog", () => {
  it("should not render if isOpen is false", () => {
    const { queryByTestId } = render(
      <Dialog closeOnOverlayClick isOpen={false} onClose={jest.fn()} />
    );
    expect(queryByTestId("overlay")).toBeNull();
    expect(queryByTestId("close-button")).toBeNull();
    expect(queryByTestId("dialog")).toBeNull();
    expect(queryByTestId("dialog-header")).toBeNull();
    expect(queryByTestId("dialog-title")).toBeNull();
    expect(queryByTestId("dialog-body")).toBeNull();
  });

  it("should render if isOpen is true", () => {
    const {
      overlay,
      closeButton,
      dialog,
      dialogHeader,
      dialogTitle,
      dialogBody,
    } = setup({
      closeOnOverlayClick: false,
      isOpen: true,
      onClose: jest.fn(),
    });
    expect(overlay).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(dialog).toBeInTheDocument();
    expect(dialogHeader).toBeInTheDocument();
    expect(dialogBody).toBeInTheDocument();
  });

  it("should render title if title is provided", () => {
    const title = "My Dialog Title";
    const { dialogTitle } = setup({
      closeOnOverlayClick: false,
      isOpen: true,
      onClose: jest.fn(),
      title,
    });
    expect(dialogTitle).toBeInTheDocument();
    expect(dialogTitle).toHaveTextContent(title);
  });

  it("should not render title if title is not provided", () => {
    const { queryByTestId } = setup({
      closeOnOverlayClick: false,
      isOpen: true,
      onClose: jest.fn(),
    });
    expect(queryByTestId("dialog-title")).toBeNull();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { closeButton } = setup({
      closeOnOverlayClick: false,
      isOpen: true,
      onClose,
    });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
