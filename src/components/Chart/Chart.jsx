import React from "react";

import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data} from '../../ChartData'

const ChartWrapper = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;



const Chart = () => {
     
  return (
    <ChartWrapper>
      <h3>User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis/>
          <Tooltip />
          <Line type="monotone" dataKey="Active user" stroke="#5550bd" />
        <Legend/>
          <CartesianGrid stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default Chart;
