import React from 'react';
import { Button, TextField, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const AddEntryDialog = ({ onAddEntry }) => {
  return (
    <Formik
      initialValues={{
        Delivery_person_ID: '',
        Delivery_person_Age: '',
        Restaurant_latitude: '',
        Restaurant_longitude: '',
        Delivery_location_latitude: '',
        Delivery_location_longitude: '',
        Order_Date: '',
        Time_Orderd: '',
        Time_Order_picked: '',
        Weather_conditions: '',
        Road_traffic_density: '',
        Vehicle_condition: '',
        Type_of_order: '',
        Type_of_vehicle: '',
        multiple_deliveries: '',
        Festival: '',
        City: '',
        Time_taken_min: ''
      }}
      validationSchema={Yup.object({
        Delivery_person_ID: Yup.string().required('Required'),
        Delivery_person_Age: Yup.number().required('Required'),
        Restaurant_latitude: Yup.number().required('Required'),
        Restaurant_longitude: Yup.number().required('Required'),
        Delivery_location_latitude: Yup.number().required('Required'),
        Delivery_location_longitude: Yup.number().required('Required'),
        Order_Date: Yup.date().required('Required'),
        Time_Orderd: Yup.string().required('Required'),
        Time_Order_picked: Yup.string().required('Required'),
        Weather_conditions: Yup.string().required('Required'),
        Road_traffic_density: Yup.string().required('Required'),
        Vehicle_condition: Yup.string().required('Required'),
        Type_of_order: Yup.string().required('Required'),
        Type_of_vehicle: Yup.string().required('Required'),
        multiple_deliveries: Yup.string().required('Required'),
        Festival: Yup.string().required('Required'),
        City: Yup.string().required('Required'),
        Time_taken_min: Yup.number().required('Required')
      })}
      onSubmit={(values, { resetForm }) => {
        const newEntry = {
          ...values,
          ID: uuidv4(), // Generate unique ID
        };
        onAddEntry(newEntry);
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <DialogTitle>Add New Entry</DialogTitle>
          <DialogContent>
            <TextField
              name="Delivery_person_ID"
              label="Delivery Person ID"
              value={values.Delivery_person_ID}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Delivery_person_Age"
              label="Delivery Person Age"
              type="number"
              value={values.Delivery_person_Age}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Restaurant_latitude"
              label="Restaurant Latitude"
              type="number"
              value={values.Restaurant_latitude}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Restaurant_longitude"
              label="Restaurant Longitude"
              type="number"
              value={values.Restaurant_longitude}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Delivery_location_latitude"
              label="Delivery Location Latitude"
              type="number"
              value={values.Delivery_location_latitude}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Delivery_location_longitude"
              label="Delivery Location Longitude"
              type="number"
              value={values.Delivery_location_longitude}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Order_Date"
              label="Order Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={values.Order_Date}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Time_Orderd"
              label="Time Ordered"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={values.Time_Orderd}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Time_Order_picked"
              label="Time Order Picked"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={values.Time_Order_picked}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Weather_conditions"
              label="Weather Conditions"
              value={values.Weather_conditions}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Road_traffic_density"
              label="Road Traffic Density"
              value={values.Road_traffic_density}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Vehicle_condition"
              label="Vehicle Condition"
              value={values.Vehicle_condition}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Type_of_order"
              label="Type of Order"
              value={values.Type_of_order}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Type_of_vehicle"
              label="Type of Vehicle"
              value={values.Type_of_vehicle}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="multiple_deliveries"
              label="Multiple Deliveries"
              value={values.multiple_deliveries}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Festival"
              label="Festival"
              value={values.Festival}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="City"
              label="City"
              value={values.City}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="Time_taken_min"
              label="Time Taken (min)"
              type="number"
              value={values.Time_taken_min}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => onAddEntry(null)} color="error">
              Cancel an Entry
            </Button>
            <Button type="submit" variant = "contained" color="success">
              Add an Entry
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

export default AddEntryDialog;
