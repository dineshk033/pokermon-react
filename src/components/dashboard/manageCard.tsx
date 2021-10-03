import { Stack, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import React from 'react';
import { CardSortByButton } from './cardSort';
import Icon from '@mui/material/Icon';
import PaginationTemplate from './PaginationTemplate';
export const ManageCardShow: React.FC = () => {
  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      alignItems='center'
      justifyContent='space-between'
      sx={{ mb: 1 }}
    >
      <TextField
        id='search_by_prop'
        sx={{ maxWidth: 300 }}
        fullWidth={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <IconButton aria-label='search'>
                <Icon>search</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
        placeholder='Search by Name or Attribute'
        size='small'
      />
      <Stack direction='row' alignItems='center' flexWrap='wrap' spacing={1} sx={{ my: 1 }}>
        <CardSortByButton />
        <PaginationTemplate />
      </Stack>
    </Stack>
  );
};
