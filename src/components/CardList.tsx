import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { CardTemplate } from './Card';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { requestPokemon } from '../redux/actions';

// const mock = {
//   name: 'chlorophyll',
//   height: 7,
//   image:
//     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
//   weight: 69,
//   abilities: ['overgrow', 'bulbasaur']
// };

export const CardList: React.FC = (props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const data = useSelector((state: any) => state.data);
  useEffect(() => {
    dispatch(requestPokemon('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'));
  }, [dispatch]);
  return (
    <Grid container spacing={5}>
      {data.map((el: any) => (
        <Grid item xs={12} sm={6} md={3} key={el.name}>
          <CardTemplate {...el} />
        </Grid>
      ))}
    </Grid>
  );
};
