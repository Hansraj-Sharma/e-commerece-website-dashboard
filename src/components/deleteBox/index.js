import React from "react";
import styles from "./style.module.css"

const DeleteBox = () => {
    return (
      <div className={styles.delete_main}>
        <div className={styles.delete_box}>
          <div className={styles.delete_wrapper}>
            <div className={styles.title}>Delete Items</div>
            <div className={styles.description}>Delete Items</div>
          </div>
        </div>
      </div>
    );
}

export default DeleteBox