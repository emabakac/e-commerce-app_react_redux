import React from "react";
import { Typography } from "@material-ui/core";

export default function MaterialUITypography({
  variant,
  component,
  style,
  color,
  className,
  text,
  onClick,
  gutterBottom,
  id,
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      className={className}
      color={color}
      style={style}
      gutterBottom={gutterBottom}
      onClick={onClick}
      id={id}
    >
      {text}
    </Typography>
  );
}
