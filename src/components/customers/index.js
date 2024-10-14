import React, { useState } from "react";
import CustomersData from "../../jsonData/customersData.json";
import Heading from "../heading";
import Filter from "../filter";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = CustomersData.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(CustomersData.length / ordersPerPage);

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
        title={"Customers"}
        btnTitle1={"Export"}
        btnTitle2={"Add Customer"}
      />
      <div className={styles.order_footer}>
        <div className={styles.customers_wrapper}>
          <span>All Customers</span>
          <span>New Customers</span>
          <span>From Europe</span>
          <span>Returning Customers</span>
        </div>
        <Filter />

        <table className={styles.order_table}>
          <tr className={styles.order_data_wrapper}>
            <th>
              <input type='checkbox' />
              <span>Name</span>
            </th>
            <th>Location</th>
            <th>Orders</th>
            <th>Spent</th>
          </tr>

          {currentOrders.map((value, index) => (
            <tr className={styles.order_data_wrapper} key={index}>
              <td>
                <input type='checkbox' />
                <div className={styles.product_info}>
                  <Link to={"/customersInfo"} className={styles.customer_name}>
                    {value.name.charAt(0)}
                  </Link>
                  <div className={styles.product_name}>
                    <div className={styles.product_category}>{value.name} </div>
                  </div>
                </div>
              </td>
              <td>{value.location}</td>
              <td>{value.orders}</td>
              <td>
                <span>{value.spent}</span>
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

export default Customers;
