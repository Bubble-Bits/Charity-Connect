"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
};

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}: Props) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center"></div>
    </>
  );
}

export default Modal;
