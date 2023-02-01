import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";
import { IPriceHistoryData } from "../pages/Interface";

type Props = {
  data: IPriceHistoryData[];
};

function PriceHistory({ data }: Props) {
  const config = {
    data,
    xField: "listing_start_date",
    yField: "Average price",
    yAxis: {
      range: [0, 1],
      tickCount: 5,
      maxLimit:
        Math.round(Math.max(...data.map((obj) => obj["Average price"])) / 100) *
        150,
    },
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    height: 280,
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return <Area {...config} />;
}

export default PriceHistory;
