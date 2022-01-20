import React from 'react';
import { Box, useTheme, Typography, Button } from '@mui/material';
import DataTable from './DataTable';
import DataChart from './DataChart';

export default function Container() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.3)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          boxShadow: '10',
          borderRadius: '1rem',
          maxWidth: '1200px',
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: 'center',
            fontSize: '4rem',
            my: '1rem',
            color: 'text.primary',
          }}
        >
          Daily Sleep Tracker
        </Typography>
        <Button
          variant='contained'
          size='large'
          color='primary'
          sx={{
            width: '10rem',
            height: '3rem',
            my: '1rem',
            borderRadius: '999px',
          }}
        >
          + New Entry
        </Button>
        <Box
          sx={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <DataTable />
          <DataChart />
        </Box>
      </Box>
    </Box>
  );
}
