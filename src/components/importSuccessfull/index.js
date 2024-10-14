import React from "react";
import styles from "./style.module.css";
import CheckIcon from "../../icons/checkIcon";
import Button from "../button";
import CloseIcon from "../../icons/closeIcon";

const ImportSuccessfull = ({ onClose }) => {
  return (
    <div className={styles.successfull_main}>
      <div className={styles.successfull_box}>
        <div className={styles.sb_close_icon} onClick={onClose}>
          <CloseIcon />
        </div>

        <div className={styles.sbc_wrapper}>
          <div className={styles.sbc_check}>
            <CheckIcon />
          </div>
          <div className={styles.sbc_title}>Export Successfull</div>
          <div className={styles.sbc_des}>Added new products to your store</div>
          <div className={styles.sbc_btn}>
            <Button title={"Continue"} size={"small"} bg={"blue"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportSuccessfull;
