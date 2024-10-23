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
  delOnClick,
  onSearch,
  onFilterChange,
}) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className={styles.order_features}>
      <div className={`${styles.of_left} ${customClass}`}>
        {select && (
          <select className={styles.order_filter} onChange={handleFilterChange}>
            <option value='All'>All</option>
            <option value='Active'>Active</option>
            <option value='Expired'>Expired</option>
          </select>
        )}
        {search && (
          <div className={`${styles.of_search} ${customClass}`}>
            <SearchIcon />
            <input type='text' placeholder='Search...' onChange={onSearch} />
          </div>
        )}
      </div>
      {button && (
        <div className={styles.of_right}>
          <button>
            <EditIcon />
          </button>
          <button onClick={delOnClick}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
