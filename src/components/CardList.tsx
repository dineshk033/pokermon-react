import React from 'react';
import { Grid } from '@mui/material';
import { CardTemplate } from './Card';

const mock = {
  name: 'chlorophyll',
  height: 7,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  weight: 69,
  abilities: ['overgrow', 'bulbasaur']
};

export const CardList: React.FC = (props) => {
  return (
    <Grid container spacing={5}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
        <Grid item xs={12} sm={6} md={3} key={el}>
          <CardTemplate {...mock} />
        </Grid>
      ))}
    </Grid>
  );
};
