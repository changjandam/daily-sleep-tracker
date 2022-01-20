import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { getDetail } from '../util/util';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

export default function DataChart() {
  const theme = useTheme()
  const data = useSelector((state) => state.data.data);

  const chartData = data.map((i) => {
    const detail = getDetail(i);
    return { date: detail.date, duration: parseFloat(detail.duration) };
  });

  console.log(chartData);

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
