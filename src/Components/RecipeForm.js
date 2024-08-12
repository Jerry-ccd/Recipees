import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const RecipeForm = ({ addRecipe }) => {
  const initialValues = {
    title: '',
    ingredients: '',
    date: dayjs(),
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    ingredients: Yup.string().required('Ingredients are required'),
    date: Yup.date().required('Date is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addRecipe(values);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Field
              as={TextField}
              name="title"
              label="Title"
              fullWidth
              margin="normal"
            />
            <Field
              as={TextField}
              name="ingredients"
              label="Ingredients"
              fullWidth
              margin="normal"
            />
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={values.date}
              onChange={(value) => setFieldValue('date', value)}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Add Recipe
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RecipeForm;
