import styles from "./Chart.module.css";

import { convertData } from "../../helper/convertData.js";

import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart, currency }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={(event) => typeHandler(event)}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Price :</p>
            <span>
              {currency === "usd" ? "$ " : currency === "eur" ? "€ " : "¥ "}
              {chart.coin.current_price.toLocaleString()}
            </span>
          </div>
          <div>
            <p>ATH :</p>
            <span>
              {currency === "usd" ? "$ " : currency === "eur" ? "€ " : "¥ "}
              {chart.coin.ath.toLocaleString()}
            </span>
          </div>
          <div>
            <p>Market Cap :</p>
            <span>
              {currency === "usd" ? "$ " : currency === "eur" ? "€ " : "¥ "}
              {chart.coin.market_cap.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3674ff"
          strokeWidth="2px"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
