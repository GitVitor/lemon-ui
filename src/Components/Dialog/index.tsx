import React, { useState, useEffect, ReactNode } from "react";
import { CloseButton } from "../CloseButton";
import * as s from "./style";

export type DialogProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
};

export const Dialog = ({
  title,
  isOpen,
  onClose,
  closeOnOverlayClick,
  children,
}: DialogProps) => {
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    setShowDialog(isOpen);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setShowDialog(false);
    onClose();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  return showDialog ? (
    <>
      <s.DialogWrapper>
        <s.Overlay
          data-testid="overlay"
          onClick={closeOnOverlayClick ? handleClose : undefined}
        />
        <s.Dialog data-testid="dialog">
          <s.DialogHeader className="dialog-header" data-testid="dialog-header">
            {title && (
              <h2 data-testid="dialog-title" className="dialog-title">
                {title}
              </h2>
            )}
            <CloseButton data-testid="close-button" onClick={handleClose} />
          </s.DialogHeader>
          <s.DialogBody data-testid="dialog-body">{children}</s.DialogBody>
        </s.Dialog>
      </s.DialogWrapper>
    </>
  ) : (
    <></>
  );
};

export default Dialog;
