import React, { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { change } from '../redux/slices/colorSlice';

import DataTable from './DataTable';
import DataChart from './DataChart';

import { Box, Typography, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Container() {
  const data = useSelector((state) => state.data);
  const mode = useSelector((state) => state.color.colorMode);
  const dispatch = useDispatch();
  const currentPageData = useMemo(() => {
    return data.data.slice(
      data.page * data.pageSize,
      (data.page + 1) * data.pageSize < data.data.length
        ? (data.page + 1) * data.pageSize
        : data.data.length
    );
  }, [data]);

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
          position: 'relative',
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
          sx={{ position: 'absolute', top: '2rem', right: '2rem' }}
          onClick={() => dispatch(change())}
        >
          {mode === 'light' ? (
            <Brightness7Icon fontSize='large' />
          ) : (
            <Brightness4Icon fontSize='large' />
          )}
        </Button>
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
