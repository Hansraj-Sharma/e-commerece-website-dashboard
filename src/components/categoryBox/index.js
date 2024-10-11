import React from "react";
import EditIcon from "../../icons/editIcon";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const CategoryBox = ({ imgUrl, category, itemCount }) => {
  return (
    <div className={styles.category_box}>
      <div className={styles.category_img_wrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.category_img}>
          <img src={imgUrl} alt='product img' />
        </div>
        <Link
          to={"/createCategory"}
          state={{ imgUrl, category }}
          className={styles.edit_btn}>
          <EditIcon />
          <span>Edit</span>
        </Link>
      </div>
      <div className={styles.category_info}>
        <div className={styles.category_name}>{category}</div>
        <div className={styles.item_count}>{itemCount}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
