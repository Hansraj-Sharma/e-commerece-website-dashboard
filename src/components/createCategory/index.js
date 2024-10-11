import React, { useState } from "react";
import styles from "./style.module.css";
import Heading from "../heading";
import MoveIcon from "../../icons/moveIcon";
import { useLocation } from "react-router-dom";
import EditIcon from "../../icons/editIcon";
import DeleteIcon from "../../icons/deleteIcon";

const CreateCategory = () => {
  const [showIcons, setShowIcons] = useState(false);
  const location = useLocation();
  const { imgUrl, category } = location.state || {};

  const handleTogleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className={styles.create_category_main}>
      <div className={styles.back_btn}>
        <span> &#8592;</span>Back
      </div>
      <Heading
        title={"Women Clothes"}
        btnTitle1={"Cancel"}
        btnTitle2={"Save"}
      />
      <div className={styles.product_main}>
        <div className={styles.product_main_left}>
          <div className={styles.product_title}>
            Products <span>12</span>
          </div>
          <div className={styles.product_wrapper} onClick={handleTogleIcons}>
            <div className={styles.product_box}>
              <MoveIcon />
              <div className={styles.product_img}>
                <img src={imgUrl} alt='product img' />
              </div>
              <div className={styles.product_name}>{category}</div>
            </div>
            <div
              className={styles.product_icons}
              style={{ display: showIcons ? "block" : "none" }}>
              <span>
                <EditIcon />
              </span>

              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className={styles.product_main_right}>
          <div className={styles.category_visibility}>
            <div className={styles.category_title}>Category Visibility</div>
            <label className={styles.category_checkbox}>
              <input type='checkbox' />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={styles.category_info}></div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
