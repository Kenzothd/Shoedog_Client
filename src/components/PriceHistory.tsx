import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";
import axios from "axios";
import { format } from "date-fns/esm";

interface IData {
  "Average price": number;
  listing_start_date: string;
}

function PriceHistory() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/listings/true/1/one-month`)
      .then((res) => {
        setData(
          res.data.map((e: any) => ({
            "Average price": Number(e.avg_listing_price),
            listing_start_date: format(
              new Date(e.listing_start_date),
              "dd MMM yy HH:mm"
            ),
          }))
        );
      })
      .catch((err) => console.log(err));
  };

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
    height: 300,
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return <Area {...config} />;
}

export default PriceHistory;
