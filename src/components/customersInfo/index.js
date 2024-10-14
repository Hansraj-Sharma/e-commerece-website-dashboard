import React from "react";
import Heading from "../heading";
import orderData from "../../jsonData/orderData.json";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "../../icons/closeIcon";

const CustomersInfo = () => {
  return (
    <div className={styles.customersInfo}>
      <div className={styles.back_btn}>
        <span> &#8592;</span>Back
      </div>
      <Heading
        title={"Customer Information"}
        btnTitle1={"Cancel"}
        btnTitle2={"Save"}
      />
      <div className={styles.customersInfo_wrapper}>
        <div className={styles.customersInfo_left}>
          <div className={styles.customersInfo_left_top}>
            <div className={styles.customer_details}>
              <div className={styles.customer_title}>
                <div className={styles.customer_name_wrapper}>
                  <div className={styles.customer_logo}>R</div>
                  <div className={styles.customer_name_box}>
                    <div className={styles.customer_name}>Randhir Kumar</div>

                    <div className={styles.customer_other_info}>
                      India <br /> 5 Orders <br /> Customer for 2 years
                    </div>
                  </div>
                </div>
                <div className={styles.customer_star}> ★★★☆☆</div>
              </div>
              <div className={styles.customer_notes}>Customer Notes</div>
              <div className={styles.customer_notes_input}>
                <span>Notes</span>
                <br />
                <input type='text' placeholder='Add notes about customer' />
              </div>
            </div>
          </div>

          <div className={styles.customersInfo_left_top}>
            <table className={styles.order_table}>
              <tr className={styles.order_data_wrapper}>
                <th>
                  <span>Order</span>
                </th>
                <th>Date</th>
                <th>Order Status</th>
                <th>price</th>
              </tr>

              {orderData.map((value, index) => (
                <tr className={styles.order_data_wrapper} key={index}>
                  <td>
                    <span>{value.order_id}</span>
                  </td>
                  <td>{value.date_time}</td>
                  <td>
                    <span>{value.order_status}</span>
                  </td>
                  <td>{value.amount}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className={styles.customersInfo_right}>
          <div className={styles.customersInfo_right_top}>
            <div className={styles.customersInfo_right_top_title_wrapper}>
              <div className={styles.customersInfo_right_top_title_wrapper}>
                Overview
              </div>
              <Link to={"#"}>Edit</Link>
            </div>
            <div className={styles.customersInfo_right_top_address}>
              <span className={styles.customersInfo_right_title}>Address</span>
              <br />
              Hajipur,vaishali <br /> 844124 <br /> India
            </div>
            <div className={styles.customersInfo_right_top_address}>
              <span className={styles.customersInfo_right_title}>
                Email Address
              </span>
              <br />
              randhirppl@gmail.com
            </div>
            <div className={styles.customersInfo_right_top_address}>
              <span className={styles.customersInfo_right_title}>Phone</span>
              <br />
              +91 8804789764
            </div>
            <hr className={styles.rectangle} />
            <div className={styles.delete_customer}>Delete Customer</div>
          </div>

          <div className={styles.customersInfo_right_bottom}>
            <div className={styles.customersInfo_right_top_title_wrapper}>
              Tags
            </div>
            <form className={styles.form_tags}>
              <label>
                Add Tags
                <br />
                <input
                  type='text'
                  placeholder='Enter tag name'
                  className={styles.tag_input}
                />
              </label>
              <div className={styles.btn_wrapper}>
                <div className={styles.form_btn}>
                  <input
                    type='button'
                    value={"Vip Customer"}
                    className={styles.btn_input}
                  />
                  <CloseIcon />
                </div>
                <div className={styles.form_btn}>
                  <input
                    type='button'
                    value={"Europe"}
                    className={styles.btn_input}
                  />
                  <CloseIcon />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className={styles.rectangle} />
      <div className={styles.customersInfo_footer}>
        <Heading btnTitle1={"Cancel"} btnTitle2={"Save"} />
      </div>
    </div>
  );
};

export default CustomersInfo;
