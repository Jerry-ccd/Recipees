import React from 'react';
import { Typography, Paper } from '@mui/material';

const RecipeDetails = ({ recipe }) => {
  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">{recipe.name}</Typography>
      <Typography variant="body1">Ingredients: {recipe.ingredients}</Typography>
      <Typography variant="body1">Instructions: {recipe.instructions}</Typography>
    </Paper>
  );
};

export default RecipeDetails;
