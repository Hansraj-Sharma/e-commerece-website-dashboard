import React from "react";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/editIcon";
import DeleteIcon from "../../icons/deleteIcon";
import styles from "./style.module.css";

const Filter = ({
  button = true,
  select = true,
  search = true,
  customClass,
}) => {
  return (
    <div className={styles.order_features}>
      <div className={`${styles.of_left} ${customClass}`}>
        {select && (
          <select className={styles.order_filter}>
            <option>Filter</option>
            <option>Ready</option>
            <option>Shipped</option>
          </select>
        )}
        {search && (
          <div className={`${styles.of_search} ${customClass}`}>
            <SearchIcon />
            <input type='text' placeholder='Search...' />
          </div>
        )}
      </div>
      {button && (
        <div className={styles.of_right}>
          <button>
            <EditIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
