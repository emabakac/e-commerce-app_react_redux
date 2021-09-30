import React from "react";
import { Button } from "@material-ui/core";

export default function MaterialUIButton({
  variant,
  color,
  className,
  disabled,
  text,
  onClick,
}) {
  return (
    <Button
      variant={variant}
      color={color}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
