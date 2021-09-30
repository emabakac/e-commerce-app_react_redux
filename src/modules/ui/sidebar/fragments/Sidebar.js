import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { SidebarComponent } from "../../../../modules";
import { menuData } from "../../../../data/menuData";
import useStyles from "./styles";

export default function Sidebar() {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuData.map((item) => (
          <div key={item.id}>
            <Link to={`/products${item.url}`} className={classes.link}>
              <ListItem button>
                <ListItemText primary={item.menuItemName} />
              </ListItem>
            </Link>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <SidebarComponent state={state} list={list} toggleDrawer={toggleDrawer} />
  );
}
