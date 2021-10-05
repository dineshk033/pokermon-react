import React from 'react';
import Stack from '@mui/material/Stack';
import { ManageCardShow } from '../components/dashboard/manageCard';
import { Box, Skeleton } from '@mui/material';
import { range } from 'lodash';

import { CardList } from '../components/CardList';
import { useSelector } from 'react-redux';
import PaginationBottom from '../components/dashboard/PaginationBottom';

export const Dashboard: React.FC = () => {
  const RANGE = range(4);
  const loading = useSelector((state: any) => state.loading);
  const animatedSkeleton = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mb: 3 }}>
      {RANGE.map((el: number) => (
        <Skeleton key={el} variant='rectangular' width={210} height={200} />
      ))}
    </Box>
  );
  return (
    <Stack direction='column'>
      <Box sx={{ position: 'sticky', top: 50, backgroundColor: 'white' }}>
        <ManageCardShow />
      </Box>
      {loading && animatedSkeleton()}
      <CardList />
      <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <PaginationBottom />
      </Box>
    </Stack>
  );
};
