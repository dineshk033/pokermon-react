import React from 'react';
import { Card, CardMedia, Typography, Stack } from '@mui/material';

interface CardProps {
  name: string;
  height: number;
  weight: number;
  image: string;
  abilities: string[];
}

export const CardTemplate: React.FC<CardProps> = ({ name, image, height, weight, abilities }) => {
  return (
    <Card>
      {/* <ProductImgStyle alt={props.name} src={props.image} /> */}
      <CardMedia
        component='img'
        sx={{ height: 130, objectFit: 'contain' }}
        image={image}
        alt={name}
      />
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography variant='subtitle2' noWrap>
          {name}
        </Typography>
        <Stack direction='row' sx={{ margin: 0 }} spacing={2}>
          <Typography variant='caption' sx={{ margin: 0 }} mt={0} noWrap>
            <b>Height:</b> {height}
          </Typography>
          <Typography variant='caption' mt={0} noWrap>
            <b>Weight:</b> {weight}
          </Typography>
        </Stack>
        <Typography variant='caption'>
          <b>Abilities:</b> {abilities.join(' | ')}
        </Typography>
      </Stack>
    </Card>
  );
};
