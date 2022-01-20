import React, { useMemo } from 'react';
import { Box, useTheme, Typography, Button } from '@mui/material';
import DataTable from './DataTable';
import DataChart from './DataChart';
import { useSelector } from 'react-redux';

export default function Container() {
  const data = useSelector((state) => state.data);

  const currentPageData = useMemo(() => {
    return data.data.slice(
      data.page * data.pageSize,
      (data.page + 1) * data.pageSize < data.data.length
        ? (data.page + 1) * data.pageSize
        : data.data.length
    );
  }, [data]);

  const theme = useTheme();
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
          <DataTable data={currentPageData} />
          <DataChart data={currentPageData} />
        </Box>
      </Box>
    </Box>
  );
}
