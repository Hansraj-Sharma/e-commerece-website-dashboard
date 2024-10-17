import React, { useState } from "react";
import CouponData from "../../jsonData/couponsData.json";
import Heading from "../heading";
import Filter from "../filter";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import DiscountIcon from "../../icons/discountIcon";

const Coupons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = CouponData.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(CouponData.length / ordersPerPage);

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
    <div className={styles.coupons_main}>
      <Heading title={"Coupons"} btnWhite={false} btnTitle2={"Create Coupon"} />
      <div className={styles.order_footer}>
        <div className={styles.customers_wrapper}>
          <span>All Coupons </span>
          <span>Active Coupons</span>
          <span>Expired Coupons</span>
        </div>
        <Filter />

        <table className={styles.order_table}>
          <tr className={styles.order_data_wrapper}>
            <th>
              <input type='checkbox' />
              <span>Coupon Name</span>
            </th>
            <th>Usage</th>
            <th>Status</th>
            <th>Date</th>
          </tr>

          {currentOrders.map((value, index) => (
            <tr className={styles.order_data_wrapper} key={index}>
              <td>
                <input type='checkbox' />
                <div className={styles.product_info}>
                  <div className={styles.customer_name}>
                    <DiscountIcon />
                  </div>
                  <div className={styles.product_name}>
                    <div className={styles.coupon_name}>{value.name} </div>
                    <span>{value.code}</span>
                  </div>
                </div>
              </td>
              <td>{value.usage}</td>
              <td>{value.status}</td>
              <td>
                <span>
                  {value.duration?.start_date} - {value.duration?.end_date}
                </span>
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

export default Coupons;
