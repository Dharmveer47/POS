import React from "react";
import { DasLastupdate } from "./DasLastupdate";
import { Heading } from "../Heading";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const data = [
  {
    name: "01",
    Store1: 4000,
    Store2: 2400,
    amt: 2400,
  },
  {
    name: "02",
    Store1: 3000,
    Store2: 1398,
    amt: 2210,
  },
  {
    name: "03",
    Store1: 2000,
    Store2: 9800,
    amt: 2290,
  },
  {
    name: "04",
    Store1: 2780,
    Store2: 3908,
    amt: 2000,
  },
  {
    name: "05",
    Store1: 1890,
    Store2: 4800,
    amt: 2181,
  },
  {
    name: "06",
    Store1: 2390,
    Store2: 3800,
    amt: 2500,
  },
  {
    name: "07",
    Store1: 3490,
    Store2: 4300,
    amt: 2100,
  },
  {
    name: "08",
    Store1: 8490,
    Store2: 6300,
    amt: 2100,
  },
  {
    name: "09",
    Store1: 9490,
    Store2: 3300,
    amt: 2100,
  },
  {
    name: "10",
    Store1: 5490,
    Store2: 9300,
    amt: 2100,
  },
  {
    name: "11",
    Store1: 3490,
    Store2: 10300,
    amt: 2100,
  },
  {
    name: "12",
    Store1: 2490,
    Store2: 1300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <div className="das__chart_detail">
      <div className="das__line_chart">
        <Heading des="Store's Performace" />
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Label />
          <Line
            type="monotone"
            dataKey="Store1"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Store2" stroke="#82ca9d" />
        </LineChart>
      </div>
      <DasLastupdate />
    </div>
  );
}
