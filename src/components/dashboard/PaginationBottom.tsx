import React, { Dispatch, useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { pick } from 'lodash';
import { getQueryParams } from '../../utils';
import { changeRowsPerPage, requestPokemon } from '../../redux/actions';

export default function PaginationBottom() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const { count, previous, next } = useSelector((state: any) =>
    pick(state, ['count', 'previous', 'next'])
  );
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    if (next) {
      const data = getQueryParams(next);
      const count = data[0] / rowsPerPage;
      setPage(count - 1);
    }
  }, [previous, next, rowsPerPage]);
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
    dispatch(changeRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(
      requestPokemon(
        `https://pokeapi.co/api/v2/pokemon?limit=${parseInt(event.target.value, 10)}&offset=0`
      )
    );
    setPage(0);
  };

  return (
    <TablePagination
      component='div'
      count={count}
      page={page}
      rowsPerPageOptions={[10, 20, 50]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
