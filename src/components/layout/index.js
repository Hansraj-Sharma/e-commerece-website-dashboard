import React, { Fragment } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import SideMenuBar from "../sideMenuBar";
import styles from "./style.module.css";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.outLet_wrapper}>
        <div className={styles.sideBar}>
          <SideMenuBar />
        </div>
        <div className={styles.outLet}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
