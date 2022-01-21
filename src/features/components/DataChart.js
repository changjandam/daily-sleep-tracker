import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
} from 'recharts';

import { Box, useTheme } from '@mui/material';

import { getDetail } from '../util/util';

export default function DataChart({ currentData }) {
  const theme = useTheme();

  const chartData = currentData.map((i) => {
    const detail = getDetail(i);
    return { date: detail.date, duration: parseFloat(detail.duration) };
  });

  return (
    <Box
      sx={{
        p: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BarChart width={584} height={500} data={chartData} margin={16}>
        <CartesianGrid strokeDasharray='5 5' />
        <XAxis dataKey='date' />
        <YAxis type='number' tickCount={7} />
        <Tooltip />
        <Legend />
        <Bar dataKey='duration' fill={theme.palette.primary.main} />
      </BarChart>
    </Box>
  );
}
