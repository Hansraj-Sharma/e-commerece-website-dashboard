import React, { useEffect, useState } from "react";
import Heading from "../heading";
import ReactECharts from "echarts-for-react";
import styles from "./style.module.css";
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { registerMap } from "echarts/core";
import orderData from "../../jsonData/orderData.json";

echarts.use([MapChart, TitleComponent, TooltipComponent]);

const Reports = () => {
  const option = {
    legend: {
      with: "20",
      left: 0,
      top: 0,
    },

    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        barWidth: "8",
        name: "Returning customers",
        type: "bar",
        barGap: 0.8,
        color: "#D7DBEC",
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 344, 222, 239, 173, 375, 473, 452],
        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50],
          },
          normal: {
            barBorderRadius: [50, 50, 50, 50],
          },
        },
      },
      {
        barWidth: "8",
        color: "#1E5EFF",

        name: "New customers",
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 321, 342, 455, 342, 470, 234, 390],
        itemStyle: {
          emphasis: {
            barBorderRadius: [50, 50],
          },
          normal: {
            barBorderRadius: [50, 50, 50, 50],
          },
        },
      },
    ],
  };

  const SalesGoal = {
    series: [
      {
        name: "Progress",
        type: "pie",
        radius: ["50%", "57%"],
        startAngle: 180,
        endAngle: -270,
        hoverAnimation: false,
        label: {
          show: true,
          position: "center",
          formatter: "75%",
          fontSize: 20,
          color: "#000",
          fontWeight: "bold",
        },
        data: [
          {
            value: 25,
            name: "Progress",
            itemStyle: {
              color: "#E5E7EB",
            },
            emphasis: {
              label: {
                show: true,
                formatter: "25%",
                fontSize: 20,
                fontWeight: "bold",
              },
            },
          },
          {
            value: 75,
            name: "Remainder",
            itemStyle: {
              color: "#FFD700",
            },
            emphasis: {
              label: {
                show: true,
                formatter: "75%",
                fontSize: 20,
                fontWeight: "bold",
              },
            },
          },
        ],
      },
    ],
  };

  const ConversionRate = {
    series: [
      {
        name: "Progress",
        type: "pie",
        radius: ["50%", "57%"],
        startAngle: 90,
        endAngle: -270,
        hoverAnimation: false,
        label: {
          show: true,
          position: "center",
          formatter: "25%",
          fontSize: 20,
          color: "#000",
          fontWeight: "bold",
        },
        data: [
          {
            value: 25,
            name: "Progress",
            itemStyle: {
              color: "#1FD286",
            },
            emphasis: {
              label: {
                show: true,
                formatter: "25%",
                fontSize: 20,
                fontWeight: "bold",
              },
            },
          },
          {
            value: 75,
            name: "Remainder",
            itemStyle: {
              color: "#E5E7EB",
            },
            emphasis: {
              label: {
                show: true,
                formatter: "75%",
                fontSize: 20,
                fontWeight: "bold",
              },
            },
          },
        ],
      },
    ],
  };

  const OrderValue = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["4am", "8am", "12pm", "4pm", "8pm", "Jun 12"],
      axisLabel: {
        color: "#9b9b9b",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#9b9b9b",
        formatter: "${value}",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#e0e0e0",
        },
      },
    },

    series: [
      {
        name: "This Month",
        data: [0, 20, 15, 30, 34, 28, 40, 35, 25, 30, 35, 40],
        type: "line",
        color: "#3366FF",
        symbol: "none",
        symbolSize: 8,
        lineStyle: {
          width: 3,
        },
      },
    ],
    grid: {
      left: "0",
      right: "0",
      bottom: "3%",
      containLabel: true,
    },
  };

  const [wordmapOption, setWordmapOption] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json"
        );
        const worldJson = await response.json();
        registerMap("world", worldJson);

        setWordmapOption({
          title: {
            text: "World Map",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "map",
              map: "world",
              label: {
                show: true,
              },
              roam: true,
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching the world map data:", error);
      }
    };

    fetchData();
  }, []);

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
      <div className={styles.growth_chart_second_wrapper}>
        <div className={styles.progress_chart_box}>
          <div className={styles.report_title}>Sales Goal</div>

          <ReactECharts option={SalesGoal} />
          <div className={styles.pc_price_wrapper}>
            <div className={styles.pc_price_label}>
              <span>Sold for:</span> <b>$15.000</b>
            </div>
            <div className={styles.pc_price_label}>
              <span>Month goal:</span> <b>$20.000</b>
            </div>
            <div className={styles.pc_price_label}>
              <span>Left:</span> <b>$5.000</b>
            </div>
          </div>
        </div>

        <div className={styles.progress_chart_box}>
          <div className={styles.report_title}>Conversion Rate</div>

          <ReactECharts option={ConversionRate} />
          <div className={styles.pc_price_wrapper}>
            <div className={styles.pc_price_label}>
              <span>Cart:</span> <b>35%</b>
            </div>
            <div className={styles.pc_price_label}>
              <span>Checkout:</span> <b>29%</b>
            </div>
            <div className={styles.pc_price_label}>
              <span>Purchase:</span> <b>25%</b>
            </div>
          </div>
        </div>

        <div className={styles.average_value_chart}>
          <div className={styles.report_title}>Average Order Value</div>
          <div className={styles.av_detail_wrapper}>
            <div className={styles.av_detail}>
              This Month <b>$48.90</b>
            </div>
            <div className={styles.av_detail}>
              Previous Month <b>$48.90</b>
            </div>
          </div>
          <ReactECharts option={OrderValue} />
        </div>
      </div>

      <div className={styles.customer_demographics_wrapper}>
        <div className={styles.customer_demographics_left}>
          <div className={styles.report_title}>Customer Demographics</div>
          <ReactECharts option={wordmapOption} />
        </div>
        <div className={styles.customer_demographics_right}>
          <div className={styles.cdr_top}>
            <div className={styles.report_title}>Visits by Device</div>
            <div className={styles.device_box}>
              <div className={styles.device}>
                <span>Mobile</span> <b>62%</b>
              </div>
              <div className={styles.device}>
                <span>Laptop</span> <b>20%</b>
              </div>
              <div className={styles.device}>
                <span>Tablet</span> <b>13%</b>
              </div>
              <div className={styles.device}>
                <span>Other</span> <b>5%</b>
              </div>
            </div>
          </div>
          <div className={styles.cdr_bottom}>
            <div className={styles.report_title}>Online Sessions</div>
            <div className={styles.active_users}>
              <b>128</b>
              <br />
              <span>Active Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.d_tabel}>
        <div className={styles.d_tabel_box}>
          <div className={styles.d_tabel_title}>Top Customers</div>
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
        <div className={styles.d_tabel_box}>
          <div className={styles.d_tabel_title}>Top Products by Units Sold</div>
        </div>
      </div> */}
    </div>
  );
};

export default Reports;
