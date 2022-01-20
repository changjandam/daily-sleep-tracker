import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteData,
  nextPage,
  prevPage,
  setPageSize,
} from '../redux/slices/dataSlice';

import { DataGrid } from '@mui/x-data-grid';
import {
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { getDetail } from '../util/util';

const CustomFooter = ({ isStart, isEnd, pageSize }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <Box>
        <FormControl>
          <InputLabel id='page-select-label'>天數</InputLabel>
          <Select
            sx={{ width: '100px' }}
            labelId='page-select-label'
            id='page-select'
            value={pageSize}
            label='天數'
            onChange={(e) =>
              dispatch(setPageSize({ pageSize: e.target.value }))
            }
          >
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        startIcon={<ArrowBackIcon />}
        disabled={isStart}
        onClick={() => dispatch(prevPage())}
      >
        上一頁
      </Button>
      <Button
        endIcon={<ArrowForwardIcon />}
        disabled={isEnd}
        onClick={() => dispatch(nextPage())}
      >
        下一頁
      </Button>
    </Box>
  );
};

export default function DataTable({ data }) {
  const dispatch = useDispatch();
  const pageSize = useSelector((state) => state.data.pageSize);
  const isStart = useSelector((state) => state.data.page === 0);
  const isEnd = useSelector(
    (state) =>
      (state.data.page + 1) * state.data.pageSize > state.data.data.length
  );

  const rows = data.map((i) => {
    const detail = getDetail(i);
    return { id: i.id, ...detail };
  });

  const handleDelete = (id) => {
    return () => {
      setTimeout(() => dispatch(deleteData({ id })));
    };
  };

  const columns = [
    { field: 'id', headerName: 'id', width: 100 },
    { field: 'start', headerName: 'start', width: 120 },
    { field: 'end', headerName: 'end', width: 120 },
    { field: 'duration', headerName: 'duration', width: 120 },
    {
      field: 'delete',
      headerName: 'delete',
      width: 80,
      renderCell: (params) => {
        return (
          <Button onClick={handleDelete(params.id)}>
            <DeleteIcon />
          </Button>
        );
      },
    },
  ];

  return (
    <Box sx={{ p: '1rem', width: '600px' }}>
      <DataGrid
        sx={{}}
        rows={rows}
        columns={columns}
        hideFooterSelectedRowCount
        pageSize={pageSize}
        components={{
          Footer: CustomFooter,
        }}
        componentsProps={{
          footer: { isStart, isEnd, pageSize },
        }}
      />
    </Box>
  );
}
