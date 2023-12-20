import React from "react";

function useDialog() {
  const [open, setOpen] = React.useState<boolean>(() => false);
  return [open, setOpen] as const;
}

export default useDialog;
