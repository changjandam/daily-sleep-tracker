import React, { useEffect, useState } from 'react';
import { addData } from '../redux/slices/dataSlice';
import { Box, Button, TextField } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch } from 'react-redux';

export default function DatePickerModal() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const now = new Date();
    setStart(now);
    setEnd(now);
  }, [setStart, setEnd]);

  const handleAdd = () => {
    dispatch(
      addData({
        start: start.toISOString(),
        end: end.toISOString(),
      })
    );
    const now = new Date();
    setStart(now);
    setEnd(now);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
        my: '1rem',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label={start > end ? 'END should after START' : 'START'}
          value={start}
          maxDateTime={end}
          onChange={(newStart) => setStart(newStart)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label={start > end ? 'END should after START' : 'END'}
          value={end}
          minDateTime={start}
          onChange={(newEnd) => setEnd(newEnd)}
          renderInput={(params) => <TextField {...params} />}
          openTo='hours'
        />
      </LocalizationProvider>
      <Button
        variant='contained'
        sx={{ height: '100%' }}
        onClick={handleAdd}
        disabled={start === end}
      >
        + new Entry
      </Button>
    </Box>
  );
}
