import { Dispatch, useState } from 'react';
import { Menu, Button, MenuItem, Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import { useDispatch } from 'react-redux';
import { sortByValue } from '../../redux/actions';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = ['ID', 'Name', 'Height', 'Weight'];

export function CardSortByButton() {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState('ID');
  const dispatch: Dispatch<any> = useDispatch();
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleSort = (value: string) => {
    setSelected(value);
    dispatch(sortByValue(value));
    setOpen(null);
  };

  return (
    <>
      <Button
        color='inherit'
        disableRipple
        onClick={handleOpen}
        endIcon={<Icon>arrow_drop_down</Icon>}
      >
        Sort By:&nbsp;
        <Typography component='span' variant='subtitle2' sx={{ color: 'text.secondary' }}>
          {selected}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        sx={{ width: 400 }}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option}
            selected={option === selected}
            onClick={() => handleSort(option)}
            sx={{ typography: 'body2' }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
