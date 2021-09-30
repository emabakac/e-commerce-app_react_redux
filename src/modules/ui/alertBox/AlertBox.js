import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { Button } from "../../../modules";

export default function AlertBox({
  open,
  onClose,
  onClick,
  textId,
  alertText,
}) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText id={textId}>{alertText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={onClick[0]} text="DELETE" />
          <Button color="secondary" onClick={onClick[1]} text="CLOSE" />
        </DialogActions>
      </Dialog>
    </>
  );
}
