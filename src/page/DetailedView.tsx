import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';
import { Box, Grid, Typography, Button } from '@mui/material';
import axios from 'axios';
import Icon from '@mui/material/Icon';
import { capitalize } from 'lodash';
import { Link } from 'react-router-dom';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

export const DetailPage = () => {
  const { id } = useParams<any>();
  //   const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const getPokemonDetail = async (url: string) => {
    try {
      const response = await axios.get<any>(url);
      const { abilities, name, id, height, weight, sprites, types } = response.data;
      const abilityKey = abilities
        .filter((el: any) => !el.is_hidden)
        .map((el: any) => el.ability['name']);
      var image = '';
      const TYPE = types.map((el: any) => el['type']['name']);
      if (sprites.hasOwnProperty('other')) {
        // console.log(sprites['official-artwork']);
        image = sprites['other']['official-artwork']['front_default'];
      }
      //   setLoading(false);
      setData({ abilities: abilityKey, name, id, height, weight, image, type: TYPE });
    } catch (errr) {
      //   setLoading(false);
    }
  };
  useEffect(() => {
    // setLoading(true);
    getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }, [id]);
  return (
    <>
      <Button component={Link} to='/' variant='outlined' startIcon={<Icon>arrow_back</Icon>}>
        Back
      </Button>

      {data && (
        <Grid container spacing={2}>
          <Grid item>
            <Img alt={data.image} src={data.image} />
          </Grid>
          <Grid item xs={12} m={2} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {capitalize(data.name)}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                <Typography variant='body2' mr={2} gutterBottom>
                  <b>Height:</b> {data.height}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  <b>Weight:</b> {data.weight}
                </Typography>
              </Box>

              <Box sx={{ display: 'row', alignItems: 'center', mr: 2 }}>
                <Typography gutterBottom mr={2} variant='body2' component='div'>
                  <b>Abilities:</b>
                  {data.abilities.map((el: any) => (
                    <Typography gutterBottom variant='caption' key={el} mx={1} component='span'>
                      {capitalize(el)}
                    </Typography>
                  ))}
                </Typography>
                <Typography gutterBottom mr={2} variant='body2' component='div'>
                  <b>Type:</b>
                  {data.type.map((el: any) => (
                    <Typography gutterBottom variant='caption' mx={1} key={el} component='span'>
                      {capitalize(el)}
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
