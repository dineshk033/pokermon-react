import React from 'react';
import './App.css';
import { Typography, Container, Toolbar, AppBar, Box } from '@mui/material';

import { Dashboard } from './page/dashboard';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit' component='div'>
            Pokemon Web Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed sx={{ my: 1 }}>
        <Dashboard />
      </Container>
    </Box>
  );
}

export default App;
