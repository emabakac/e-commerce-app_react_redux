import React from "react";
import { Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function SidebarComponent({ state, list, toggleDrawer }) {
  const anchor = "right";

  return (
    <>
      <IconButton onClick={toggleDrawer(anchor, true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </>
  );
}
