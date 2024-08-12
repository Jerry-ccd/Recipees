import React from 'react';
import { Box, Typography } from '@mui/material';
import TableComponent from './TableComponent';

const TotalDataPage = ({ data }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Total Data Page
      </Typography>
      <TableComponent data={data} />
    </Box>
  );
};

export default TotalDataPage;
