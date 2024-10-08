import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, title, to }) => {
  return (
    <NavLink to={to} className={styles.navItem}>
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </NavLink>
  );
};

export default NavItem;
