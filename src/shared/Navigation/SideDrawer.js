import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
export default function SideDrawer({ children,onClick }) {
  const content = <aside className="side-drawer" onClick={onClick}>{children} </aside>;
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}
