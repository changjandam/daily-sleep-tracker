import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData } from '../redux/slices/dataSlice';

export default function DataTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [pageSize, setPageSize] = useState(7);

  const getDetail = ({ start, end }) => {
    const date = `${new Date(start).getMonth() + 1}/${new Date(
      start
    ).getDate()}`;
    const formatTime = (time) => {
      const hour = new Date(time).getHours().toString();
      const minute = new Date(time).getMilliseconds().toString();
      return `${hour.length === 1 ? '0' + hour : hour}: ${
        minute.length === 1 ? '0' + minute : minute
      }`;
    };
    const duration = (
      (new Date(end) - new Date(start)) /
      (1000 * 3600)
    ).toPrecision(2);
    return {
      date,
      start: formatTime(start),
      end: formatTime(end),
      duration,
    };
  };

  const rows = data.map((i) => {
    const detail = getDetail(i);
    return { id: i.id, ...detail };
  });

  const handleDelete = (id) => {
    return () => dispatch(deleteData({ id }));
  };

  const columns = [
    { field: 'date', headerName: 'date', width: 120 },
    { field: 'start', headerName: 'start', width: 120 },
    { field: 'end', headerName: 'end', width: 120 },
    { field: 'duration', headerName: 'duration', width: 120 },
    {
      field: 'delete',
      headerName: 'delete',
      width: 80,
      renderCell: (params) => {
        console.log(params);
        return (
          <Button onClick={handleDelete(params.id)}>
            <DeleteIcon />
          </Button>
        );
      },
    },
  ];

  return (
    <Box sx={{ p: '1rem' }}>
      <DataGrid
        sx={{ width: '600px' }}
        rows={rows}
        columns={columns}
        hideFooterSelectedRowCount
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[7, 15, 30]}
        pagination
      />
    </Box>
  );
}
