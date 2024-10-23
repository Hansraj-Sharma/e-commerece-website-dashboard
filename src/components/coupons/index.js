// import React, { useState } from "react";
// import CouponData from "../../jsonData/couponsData.json";
// import Heading from "../heading";
// import Filter from "../filter";
// import styles from "./style.module.css";
// import DiscountIcon from "../../icons/discountIcon";

// const Coupons = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 10;

//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = CouponData.slice(indexOfFirstOrder, indexOfLastOrder);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math.ceil(CouponData.length / ordersPerPage);

//   const handlePriviousPage = () => {
//     if (currentPage > 1) {
//       paginate(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       paginate(currentPage + 1);
//     }
//   };

//   return (
//     <div className={styles.coupons_main}>
//       <Heading title={"Coupons"} btnWhite={false} btnTitle2={"Create Coupon"} />
//       <div className={styles.order_footer}>
//         <div className={styles.customers_wrapper}>
//           <button className={styles.tab_button}>All Coupons </button>
//           <button className={styles.tab_button}>Active Coupons</button>
//           <button className={styles.tab_button}>Expired Coupons</button>
//         </div>
//         <Filter />

//         <table className={styles.order_table}>
//           <tr className={styles.order_data_wrapper}>
//             <th>
//               <input type='checkbox' />
//               <span>Coupon Name</span>
//             </th>
//             <th>Usage</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>

//           {currentOrders.map((value, index) => (
//             <tr className={styles.order_data_wrapper} key={index}>
//               <td>
//                 <input type='checkbox' />
//                 <div className={styles.product_info}>
//                   <div className={styles.customer_name}>
//                     <DiscountIcon />
//                   </div>
//                   <div className={styles.product_name}>
//                     <div className={styles.coupon_name}>{value.name} </div>
//                     <span>{value.code}</span>
//                   </div>
//                 </div>
//               </td>
//               <td>{value.usage}</td>
//               <td>{value.status}</td>
//               <td>
//                 <span>
//                   {value.duration?.start_date} - {value.duration?.end_date}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </table>
//         <div className={styles.pagination}>
//           <button
//             onClick={handlePriviousPage}
//             className={currentPage > 1 ? styles.active : ""}>
//             &#8592;
//           </button>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={currentPage === index + 1 ? styles.active : ""}>
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={handleNextPage}
//             className={currentPage < totalPages ? styles.active : ""}>
//             &#8594;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coupons;

import React, { useState } from "react";
import CouponData from "../../jsonData/couponsData.json";
import Heading from "../heading";
import styles from "./style.module.css";
import DiscountIcon from "../../icons/discountIcon";
import Filter from "../filter";

const Coupons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [coupons, setCoupons] = useState(CouponData);
  const [searchTerm, setSearchTerm] = useState("");
  const ordersPerPage = 10;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentDate = new Date();

  const parseDate = (dateString) => new Date(dateString);

  const filteredCoupons = coupons
    .filter((coupon) => {
      const startDate = parseDate(coupon.duration.start_date);
      const endDate = parseDate(coupon.duration.end_date);
      const isActive = currentDate >= startDate && currentDate <= endDate;

      if (filterStatus === "Active") {
        return isActive;
      } else if (filterStatus === "Expired") {
        return !isActive;
      } else {
        return true;
      }
    })
    .filter((coupon) =>
      coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const currentOrders = filteredCoupons.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredCoupons.length / ordersPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handleCheckboxChange = (coupon) => {
    setSelectedCoupons((prevSelected) => {
      const isChecked = prevSelected.includes(coupon.id);
      if (isChecked) {
        return prevSelected.filter((id) => id !== coupon.id);
      } else {
        return [...prevSelected, coupon.id];
      }
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedCoupons([]);
    } else {
      setSelectedCoupons(filteredCoupons.map((coupon) => coupon.id));
    }
    setSelectAll(!selectAll);
  };

  const handleFilterClick = () => {
    const selectedData = coupons.filter((coupon) =>
      selectedCoupons.includes(coupon.id)
    );
    console.log("Selected Coupons Data:", selectedData);

    const updatedCoupons = coupons.filter(
      (coupon) => !selectedCoupons.includes(coupon.id)
    );
    setCoupons(updatedCoupons);

    setSelectedCoupons([]);
    setSelectAll(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterValue) => {
    setFilterStatus(filterValue);
  };

  return (
    <div className={styles.coupons_main}>
      <Heading title={"Coupons"} btnWhite={false} btnTitle2={"Create Coupon"} />

      <div className={styles.order_footer}>
        <div className={styles.customers_wrapper}>
          <button
            className={styles.tab_button}
            onClick={() => setFilterStatus("All")}>
            All Coupons
          </button>
          <button
            className={styles.tab_button}
            onClick={() => setFilterStatus("Active")}>
            Active Coupons
          </button>
          <button
            className={styles.tab_button}
            onClick={() => setFilterStatus("Expired")}>
            Expired Coupons
          </button>
        </div>
        <Filter
          delOnClick={handleFilterClick}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        <table className={styles.order_table}>
          <thead>
            <tr className={styles.order_data_wrapper}>
              <th>
                <input
                  type='checkbox'
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <span>Coupon Name</span>
              </th>
              <th>Usage</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((value) => {
              const startDate = parseDate(value.duration?.start_date);
              const endDate = parseDate(value.duration?.end_date);

              const isActive =
                currentDate >= startDate && currentDate <= endDate;
              const displayStatus = isActive ? "Active" : "Expired";

              return (
                <tr className={styles.order_data_wrapper} key={value.id}>
                  <td>
                    <input
                      type='checkbox'
                      onChange={() => handleCheckboxChange(value)}
                      checked={selectedCoupons.includes(value.id)}
                    />
                    <div className={styles.product_info}>
                      <div className={styles.customer_name}>
                        <DiscountIcon />
                      </div>
                      <div className={styles.product_name}>
                        <div className={styles.coupon_name}>{value.name}</div>
                        <span>{value.code}</span>
                      </div>
                    </div>
                  </td>
                  <td>{value.usage}</td>
                  <td>{displayStatus}</td>
                  <td>
                    <span>
                      {value.duration?.start_date} - {value.duration?.end_date}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={handlePreviousPage}
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
        )}
      </div>
    </div>
  );
};

export default Coupons;
