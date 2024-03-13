import React from "react";
import useToggle from "../../hooks/useToggle";
import { MenuContext } from "./Menu";
export default function MenuDropdown({ children }) {
  const { open } = React.useContext(MenuContext);
  return <>{open ? <div className="menu-dropdown">{children}</div> : null}</>;
}
