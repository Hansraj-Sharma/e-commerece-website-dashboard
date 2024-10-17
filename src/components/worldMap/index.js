import React, { useEffect } from "react";
import * as echarts from "echarts";

const WorldMap = () => {
  useEffect(() => {
    fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json")
      .then((response) => response.json())
      .then((data) => {
        echarts.registerMap("world", data);
        const chart = echarts.init(document.getElementById("main"));

        chart.setOption({
          series: [
            {
              type: "map",
              map: "world",
              emphasis: {
                label: {
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  areaColor: "#fff",
                  borderColor: "#111",
                },
                emphasis: {
                  areaColor: "#FFB74D", // Highlighted area color
                },
              },
              regions: [
                {
                  name: "United States",
                  itemStyle: {
                    areaColor: "#3366FF",
                    emphasis: { areaColor: "#4D90FE" },
                  },
                },
                {
                  name: "Australia",
                  itemStyle: {
                    areaColor: "#263238",
                    emphasis: { areaColor: "#3A4A5A" },
                  },
                },
                {
                  name: "India",
                  itemStyle: {
                    areaColor: "#FF7043",
                    emphasis: { areaColor: "#FF8A65" },
                  },
                },
                {
                  name: "Pakistan",
                  itemStyle: {
                    areaColor: "#2E7D32",
                    emphasis: { areaColor: "#388E3C" },
                  },
                },
                {
                  name: "Germany",
                  itemStyle: {
                    areaColor: "#FFCA28",
                    emphasis: { areaColor: "#FFD54F" },
                  },
                },
              ],
            },
          ],
        });

        // Get the region data using coordinates and log it
        const worldGeo = chart.getModel().getSeriesByIndex(0).coordinateSystem;
        const region = worldGeo.getRegionByCoord([-74, 40.743]); // Example for US
        alert(region && region.name); // Show region name for the coordinates
      })
      .catch((error) => {
        console.error("Error fetching the world map data:", error);
      });
  }, []);

  return <div id='main' style={{ width: "1200px", height: "800px" }}></div>;
};

export default WorldMap;
