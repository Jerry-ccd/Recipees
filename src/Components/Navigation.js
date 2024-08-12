import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ButtonGroup variant="contained">
      <Button component={Link} to="/">Add Recipe</Button>
      <Button component={Link} to="/view">View Recipes</Button>
      <Button component={Link} to="/filter">Filter Recipes</Button>
    </ButtonGroup>
  );
};

export default Navigation;
