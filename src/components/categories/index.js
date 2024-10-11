import React from "react";
import Heading from "../heading";
import CategoryBox from "../categoryBox";
import categoryData from "../../../src/jsonData/categoryData.json";
import styles from "./style.module.css";

const Categories = () => {
  return (
    <div className={styles.Categories_main}>
      <Heading
        title={"Categories"}
        btnTitle2={"Add Category"}
        btnWhite={false}
      />

      <div className={styles.Categories_wrapper}>
        {categoryData.map((value, index) => (
          <div className={styles.product_box}>
            <CategoryBox
              key={index}
              imgUrl={value.img}
              category={value.title}
              itemCount={value.count}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
