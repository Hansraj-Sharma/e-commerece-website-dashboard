import React from "react";
import Heading from "../heading";
import ReactECharts from "echarts-for-react";
import styles from "./style.module.css";

const Reports = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
      {
        data: [100, 130, 124, 118, 35, 47, 260],
        type: "line",
      },
    ],
  };

  return (
    <div className={styles.reports_main}>
      <Heading
        title={"Reports"}
        btnTitle2={"Export Report"}
        btnWhite={false}
        bluePath={"/successfullPage"}
      />
      <div className={styles.growth_chart}>
        <div className={styles.growth_chart_wrapper}>
          <div className={styles.gc_heading}>
            <div className={styles.report_title}>Customer Growth</div>
            <select className={styles.report_select}>
              <option value={"Last12months"}>Last 12 Months</option>
              <option value={"Last6months"}>Last 6 Months</option>
              <option value={"Last3months"}>Last 3 Months</option>
            </select>
          </div>
          <div className={styles.growth_chart_first}>
            <ReactECharts option={option} />
          </div>
        </div>
        <div className={styles.customers_sign}>
          <div className={styles.cs_text}>
            <div className={styles.first_box}></div>
            <div className={styles.cs_text_first}>Returning customers</div>
          </div>
          <div className={styles.cs_text}>
            <div className={styles.second_box}></div>
            <div className={styles.cs_text_second}>Returning customers</div>
          </div>
        </div>

        <div className={styles.users_details_wrapper}>
          <div className={styles.users_detail}>
            <div className={styles.users_detail_title}>Existing Users</div>
            <div className={styles.users_detail_count}>5.653</div>
            <div className={styles.users_detail_per}>22.45%</div>
          </div>
          <div className={styles.users_detail}>
            <div className={styles.users_detail_title}>Existing Users</div>
            <div className={styles.users_detail_count}>5.653</div>
            <div className={styles.users_detail_per}>22.45%</div>
          </div>
          <div className={styles.users_detail}>
            <div className={styles.users_detail_title}>Existing Users</div>
            <div className={styles.users_detail_count}>5.653</div>
            <div className={styles.users_detail_per}>22.45%</div>
          </div>
          <div className={styles.users_detail}>
            <div className={styles.users_detail_title}>Existing Users</div>
            <div className={styles.users_detail_count}>5.653</div>
            <div className={styles.users_detail_per}>22.45%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
