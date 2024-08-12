import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import dayjs from 'dayjs';

const RecipeTable = ({ recipes, viewRecipe }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes.map((recipe, index) => (
            <TableRow key={index}>
              <TableCell>{recipe.name}</TableCell>
              <TableCell>{recipe.ingredients}</TableCell>
              <TableCell>{dayjs(recipe.date).format('MM/DD/YYYY')}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => viewRecipe(recipe)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecipeTable;
