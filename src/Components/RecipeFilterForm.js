import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

function RecipeFilterForm({ filterRecipes }) {
  const [ingredient, setIngredient] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = () => {
    // Ensure startDate and endDate are converted to dayjs objects if they are not null
    const start = startDate ? dayjs(startDate).startOf('day') : null;
    const end = endDate ? dayjs(endDate).endOf('day') : null;

    filterRecipes(ingredient, start, end);
  };

  return (
    <Box>
      <TextField
        label="Ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        fullWidth
      />
      <DesktopDatePicker
        label="Start Date"
        inputFormat="MM/DD/YYYY"
        value={startDate}
        onChange={(newDate) => setStartDate(newDate)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
      <DesktopDatePicker
        label="End Date"
        inputFormat="MM/DD/YYYY"
        value={endDate}
        onChange={(newDate) => setEndDate(newDate)}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
      <Button onClick={handleFilter} variant="contained" color="primary">
        Filter Recipes
      </Button>
    </Box>
  );
}

export default RecipeFilterForm;
