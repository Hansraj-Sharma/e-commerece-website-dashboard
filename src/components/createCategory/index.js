import React, { useState } from "react";
import styles from "./style.module.css";
import Heading from "../heading";
import MoveIcon from "../../icons/moveIcon";
import { useLocation } from "react-router-dom";
import EditIcon from "../../icons/editIcon";
import DeleteIcon from "../../icons/deleteIcon";
import Button from "../button";

const CreateCategory = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);
  const location = useLocation();
  const { imgUrl, category } = location.state || {};

  const handleTogleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
            <div className={styles.category_checkbox_wrapper}>
              <label className={styles.category_checkbox}>
                <input type='checkbox' />
                <span className={styles.slider}> </span>
              </label>
              <span>Visible on site</span>
            </div>
          </div>
          <div className={styles.category_info}>
            <div className={styles.category_title}>Category Visibility</div>
            <label className={styles.category_label}>
              <span className={styles.category_name}>Category Name</span>
              <input
                type='text'
                value={categoryName}
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
                placeholder='Women Clothes'
              />
            </label>
            <div className={styles.form_grop}>
              <div className={styles.form_label}>Image</div>
              <div className={styles.addFile_box}>
                <input
                  type='file'
                  className={styles.file_input}
                  onChange={handleFileChange}
                />
                <div className={styles.addFile_text}>
                  <div className={styles.addFile_btn}>
                    {file ? file.name : "Add File"}
                  </div>

                  <span>Or drag and drop files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
 