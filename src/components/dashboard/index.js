import React from "react";
import styles from "./style.module.css";
import SettingIcon from "../../icons/settingIcon";
import { Link } from "react-router-dom";
import DolorIcon from "../../icons/dolorIcon";
import CartIcon from "../../icons/cartIcon";
import img1 from "../../assets/images/product-small-img1.png";
import chartImg1 from "../../assets/images/dashboard-chart-img1.png";
import chartImg2 from "../../assets/images/dashboard-chart-img2.png";

const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.d_wrapper}>
          <div className={styles.dw_header}>
            <div className={styles.dw_title}>Dashboard</div>
            <Link to={"#"} className={styles.dw_manage}>
              <SettingIcon />
              <span>Manage</span>
            </Link>
          </div>
          <div className={styles.dw_card_wrapper}>
            <div className={styles.dw_card}>
              <div className={styles.dwc_left}>
                <div className={styles.dwc_title}>$10.540</div>
                <div className={styles.dwc_description}>Total Revenue</div>
                <div className={styles.dwc_growth}>22.45%</div>
              </div>
              <div className={styles.dwc_right}>
                <DolorIcon />
              </div>
            </div>
            <div className={styles.dw_card}>
              <div className={styles.dwc_left}>
                <div className={styles.dwc_title}>1,056</div>
                <div className={styles.dwc_description}>Orders</div>
                <div className={styles.dwc_growth}>15.34%</div>
              </div>
              <div className={styles.dwc_right}>
                <CartIcon />
              </div>
            </div>
            <div className={styles.dw_card}>
              <div className={styles.dwc_left}>
                <div className={styles.dwc_title}>1,056</div>
                <div className={styles.dwc_description}>Orders</div>
                <div className={styles.dwc_growth}>15.34%</div>
              </div>
              <div className={styles.dwc_right}>
                <CartIcon />
              </div>
            </div>
            <div className={styles.dw_card}>
              <div className={styles.dwc_left}>
                <div className={styles.dwc_title}>1,056</div>
                <div className={styles.dwc_description}>Orders</div>
                <div className={styles.dwc_growth}>15.34%</div>
              </div>
              <div className={styles.dwc_right}>
                <CartIcon />
              </div>
            </div>
            <div className={styles.dw_card}>
              <div className={styles.dwc_left}>
                <div className={styles.dwc_title}>1,056</div>
                <div className={styles.dwc_description}>Orders</div>
                <div className={styles.dwc_growth}>15.34%</div>
              </div>
              <div className={styles.dwc_right}>
                <CartIcon />
              </div>
            </div>
          </div>
          <div className={styles.d_order_chart}>
            <div className={styles.doc_left}>
              <div className={styles.doc_left_head}>
                <div className={styles.doc_title}>Orders Over Time</div>
                <select className={styles.doc_time}>
                  <option>Last 12 Hours</option>
                  <option>Last 24 Hours</option>
                  <option>Last 48 Hours</option>
                </select>
              </div>
              <div className={styles.order_details}>
                <div className={styles.order_details_left}>
                  <div className={styles.order_date}>
                    <div className={styles.order_date_title}>645</div>
                    <div className={styles.order_date_description}>
                      Orders on May 22
                    </div>
                  </div>
                  <div className={styles.order_date}>
                    <div className={styles.order_date_title}>472</div>
                    <div className={styles.order_date_description}>
                      Orders on May 21
                    </div>
                  </div>
                </div>
                <div className={styles.order_details_right}>
                  <div className={styles.order_details_right_first}>
                    <div className={styles.box}></div> <span>May 21</span>
                  </div>
                  <div className={styles.order_details_right_second}>
                    <div className={styles.box}></div> <span>May 22</span>
                  </div>
                </div>
              </div>
              <div className={styles.chart_img1}>
                <img src={chartImg1} alt='chart' />
              </div>
            </div>
            <div className={styles.doc_right}>
              <div className={styles.doc_right_title}>Last 7 Days Sales</div>
              <div className={styles.doc_right_items}>
                <span>1,259</span>
                <br />
                Items Sold
              </div>
              <div className={styles.docr_price}>
                <span>$12,546</span>
                <br />
                Revenue
              </div>
              <div className={styles.docr_chart}>
                <img src={chartImg2} alt='chart img' />
              </div>
            </div>
          </div>

          <div className={styles.d_tabel}>
            <div className={styles.d_tabel_box}>
              <div className={styles.d_tabel_title}>
                Top Products by Units Sold
              </div>
              <table className={styles.transactions_data_wrapper}>
                <tr className={styles.td_title}>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
                <tr className={styles.td_data}>
                  <td>Jagarnath S.</td>
                  <td>24.05.2023</td>
                  <td>$124.97</td>
                  <td>Paid</td>
                </tr>
                <tr className={styles.td_data}>
                  <td>Anand G.</td>
                  <td>23.05.2023</td>
                  <td>$55.42</td>
                  <td>Pending</td>
                </tr>
                <tr className={styles.td_data}>
                  <td>Kartik S.</td>
                  <td>23.05.2023</td>
                  <td>$89.90</td>
                  <td>Paid</td>
                </tr>
                <tr className={styles.td_data}>
                  <td>Rakesh S.</td>
                  <td>22.05.2023</td>
                  <td>$144.94</td>
                  <td>Pending</td>
                </tr>
                <tr className={styles.td_data}>
                  <td>Anup S.</td>
                  <td>22.05.2023</td>
                  <td>$70.52</td>
                  <td>Paid</td>
                </tr>
              </table>
            </div>
            <div className={styles.d_tabel_box}>
              <div className={styles.d_tabel_title}>
                Top Products by Units Sold
              </div>
              <table className={styles.transactions_data_wrapper}>
                <tr className={styles.td_title}>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Units Sold</th>
                </tr>
                <tr className={styles.td_img_data}>
                  <td>
                    <img src={img1} alt='product img' />
                    Jagarnath S.
                  </td>
                  <td>$49.90</td>
                  <td>204</td>
                </tr>
                <tr className={styles.td_img_data}>
                  <td>
                    <img src={img1} alt='product img' />
                    Women Striped T-Shirt{" "}
                  </td>
                  <td>$34.90</td>
                  <td>155</td>
                </tr>
                <tr className={styles.td_img_data}>
                  <td>
                    <img src={img1} alt='product img' />
                    Wome White T-Shirt{" "}
                  </td>
                  <td>$40.90</td>
                  <td>120</td>
                </tr>
                <tr className={styles.td_img_data}>
                  <td>
                    <img src={img1} alt='product img' />
                    Men White T-Shirt{" "}
                  </td>
                  <td>$49.90</td>
                  <td>204</td>
                </tr>
                <tr className={styles.td_img_data}>
                  <td>
                    <img src={img1} alt='product img' />
                    Women Red T-Shirt
                  </td>
                  <td>$34.90</td>
                  <td>155</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
