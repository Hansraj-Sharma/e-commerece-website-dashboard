import React, { Fragment } from "react";
import Button from "../button";
import styles from "./style.module.css";

const Heading = ({
  title,
  btnTitle1,
  btnTitle2,
  btnWhite = true,
  btnblue = true,
}) => {
  return (
    <Fragment>
      <div className={styles.order_header}>
        <div className={styles.oh_title}>{title}</div>
        <div className={styles.oh_btns}>
          {btnWhite && (
            <Button
              size={"small"}
              bg={"white"}
              title={btnTitle1}
              isButton={"true"}
            />
          )}
          {btnblue && (
            <Button
              size={"small"}
              bg={"blue"}
              title={btnTitle2}
              isButton={"true"}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Heading;
