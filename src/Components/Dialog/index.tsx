import React, { useState, useEffect, ReactNode } from "react";
import * as s from "./style";

type DialogProps = {
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
        <s.Overlay onClick={closeOnOverlayClick ? handleClose : undefined} />
        <s.Dialog>
          <s.DialogHeader className="dialog-header">
            {title && <h2 className="dialog-title">{title}</h2>}
            <button onClick={handleClose}>x</button>
          </s.DialogHeader>
          <s.DialogBody>{children}</s.DialogBody>
        </s.Dialog>
      </s.DialogWrapper>
    </>
  ) : (
    <></>
  );
};

export default Dialog;
