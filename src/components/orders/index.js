import React, { useState } from "react";
import styles from "./style.module.css";

import orderData from "../../jsonData/orderData.json";
import Heading from "../heading";
import Filter from "../filter";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 14;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderData.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(orderData.length / ordersPerPage);

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
      <Heading title={"Orders"} btnTitle1={"Export"} btnTitle2={"Add Order"} />
      <div className={styles.order_footer}>
        <Filter />

        <table className={styles.order_table}>
          <tr className={styles.order_data_wrapper}>
            <th>
              <input type='checkbox' />
              <span>Order</span>
            </th>
            <th>Date</th>
            <th>Customer</th>
            <th>Payment status</th>
            <th>Order Status</th>
            <th>Total</th>
          </tr>

          {currentOrders.map((value, index) => (
            <tr className={styles.order_data_wrapper} key={index}>
              <td>
                <input type='checkbox' />
                <span>{value.order_id}</span>
              </td>
              <td>{value.date_time}</td>
              <td>{value.customer_name}</td>
              <td>
                <span>{value.payment_status}</span>
              </td>
              <td>
                <span>{value.order_status}</span>
              </td>
              <td>{value.amount}</td>
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

export default Orders;
