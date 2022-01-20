import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData } from '../redux/slices/dataSlice';
import { getDetail } from '../util/util';

export default function DataTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [pageSize, setPageSize] = useState(7);

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
    { field: 'date', headerName: 'date', width: 120 },
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
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[7, 15, 30]}
        pagination
      />
    </Box>
  );
}
