import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import BackDrop from "../components/UIElements/BackDrop";
export default function MainNavigation() {
  const [drawerIsOpen, setDraweIsOpen] = useState(false);
  function openCloseDrawer() {
    setDraweIsOpen((prevDrawer) => {
      return !prevDrawer;
    });
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={openCloseDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openCloseDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}
