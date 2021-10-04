import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CardList } from '../components/CardList';
import { ManageCardShow } from '../components/dashboard/manageCard';
import { Box } from '@mui/material';

export const Dashboard: React.FC = () => {
  return (
    <Stack direction='column'>
      <Box sx={{ position: 'sticky', top: 50, backgroundColor: 'white' }}>
        <ManageCardShow />
      </Box>
      <CardList />
      <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={10} shape='rounded' />
      </Box>
    </Stack>
  );
};
