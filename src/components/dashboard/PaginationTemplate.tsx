import React, { Dispatch, useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { pick } from 'lodash';
import { getQueryParams } from '../../utils';
import { requestPokemon } from '../../redux/actions';

export default function PaginationTemplate() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const { count, previous, next } = useSelector((state: any) =>
    pick(state, ['count', 'previous', 'next', 'rowsPerPage'])
  );
  const dispatch: Dispatch<any> = useDispatch();
  const RECORDS_PER_PAGE = useSelector((state: any) => state.rowsPerPage);

  useEffect(() => {
    if (next && RECORDS_PER_PAGE === rowsPerPage) {
      const data = getQueryParams(next);
      const count = data[0] / rowsPerPage;
      setPage(count - 1);
    }
    if (RECORDS_PER_PAGE !== rowsPerPage) {
      console.log(RECORDS_PER_PAGE);
      setRowsPerPage(RECORDS_PER_PAGE);
    }
  }, [previous, next, RECORDS_PER_PAGE, rowsPerPage]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    const offset = newPage * rowsPerPage;
    console.log(newPage, offset);
    dispatch(
      requestPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${rowsPerPage}&offset=${offset}`)
    );
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component='div'
      count={count}
      sx={{
        '& 	.MuiTablePagination-input,.MuiTablePagination-spacer,.MuiTablePagination-selectLabel,.MuiTablePagination-select,.MuiTablePagination-selectIcon':
          {
            display: 'none'
          },
        '& .MuiTablePagination-toolbar': {
          padding: 0
        }
      }}
      page={page}
      rowsPerPageOptions={[10, 20, 50]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
