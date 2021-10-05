import React from 'react';
import './App.css';
import { Typography, Container, Toolbar, AppBar, Box } from '@mui/material';

import { Dashboard } from './page/dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DetailPage } from './page/DetailedView';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Router>
        <AppBar position='sticky'>
          <Toolbar variant='dense'>
            <Typography variant='h6' color='inherit' component='div'>
              Pokemon Web Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Container fixed sx={{ my: 1 }}>
          <Route path='/' exact component={Dashboard} />
          <Route path='/pokemon/:id' component={DetailPage} />
        </Container>
      </Router>
    </Box>
  );
}

export default App;
