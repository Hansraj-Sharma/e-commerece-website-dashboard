import React from "react";
import styles from "./styles.module.css";

const UserSelect = () => {
  return (
    <div className={styles.user_data}>
      <div className={styles.user_name_logo}>R</div>
      <select className={styles.user_name}>
        <option>Randhir kumar</option>
      </select>
    </div>
  );
};

export default UserSelect;
