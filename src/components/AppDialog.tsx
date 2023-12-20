import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

type Props = {
  open: boolean;
  dialogHeader: string;
  dialogBody: React.ReactNode | string;
  confirmText: string;
  confirmColor?:
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red";
  onClose: () => void;
  onConfirm: () => void;
};

function AppDialog({
  open,
  dialogHeader,
  dialogBody,
  confirmText,
  confirmColor = "blue",
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog open={open} handler={onClose} placeholder={undefined}>
      <DialogHeader placeholder={undefined}>{dialogHeader}</DialogHeader>
      <DialogBody placeholder={undefined}>{dialogBody}</DialogBody>
      <DialogFooter placeholder={undefined} className="flex justify-start">
        <Button
          placeholder={undefined}
          variant="gradient"
          color={confirmColor}
          onClick={onConfirm}
        >
          <span>{confirmText}</span>
        </Button>
        <Button
          variant="text"
          color="gray"
          onClick={onClose}
          className="mr-1"
          placeholder={undefined}
        >
          <span>بستن</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default AppDialog;
