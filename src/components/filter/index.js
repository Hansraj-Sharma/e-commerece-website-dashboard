import React from "react";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/editIcon";
import DeleteIcon from "../../icons/deleteIcon";
import styles from "./style.module.css";

const Filter = () => {
  return (
    <div className={styles.order_features}>
      <div className={styles.of_left}>
        <select className={styles.order_filter}>
          <option>Filter</option>
          <option>Ready</option>
          <option>Shipped</option>
        </select>
        <div className={styles.of_search}>
          <SearchIcon />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className={styles.of_right}>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Filter;
