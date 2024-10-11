import React, { useState } from "react";
import styles from "./style.module.css";
import img2 from "../../assets/images/product-small-img2.png";
import productData from "../../jsonData/productData.json";
import Heading from "../heading";
import Filter from "../filter";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = productData.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(productData.length / ordersPerPage);

  const handlePriviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className={styles.order_main}>
      <Heading
        title={"Products"}
        btnTitle1={"Export"}
        btnTitle2={"Add Order"}
      />
      <div className={styles.order_footer}>
        <Filter />

        <table className={styles.order_table}>
          <tr className={styles.order_data_wrapper}>
            <th>
              <input type='checkbox' />
              <span>Product</span>
            </th>
            <th>Inventory</th>
            <th>Color</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>

          {currentOrders.map((value, index) => (
            <tr className={styles.order_data_wrapper} key={index}>
              <td>
                <input type='checkbox' />
                <div className={styles.product_info}>
                  <div className={styles.product_img}>
                    <img src={img2} alt='product img' />
                  </div>
                  <div className={styles.product_name}>
                    <div className={styles.product_category}>
                      {value.category}{" "}
                    </div>
                    <span>{value.name}</span>
                  </div>
                </div>
              </td>
              <td>{value.inventory}</td>
              <td>{value.color}</td>
              <td>
                <span>{value.price}</span>
              </td>
              <td>
                <span>{value.rating}</span>
              </td>
            </tr>
          ))}
        </table>
        <div className={styles.pagination}>
          <button
            onClick={handlePriviousPage}
            className={currentPage > 1 ? styles.active : ""}>
            &#8592;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? styles.active : ""}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={currentPage < totalPages ? styles.active : ""}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
