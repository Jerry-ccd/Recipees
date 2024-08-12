// import React, { useState } from 'react';
// import { Box, Typography, Button, TextField } from '@mui/material';
// import TableComponent from './TableComponent';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import DatePickerComponent from './DatePickerComponent';


// const HomePage = ({ data, setData }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [editingEntry, setEditingEntry] = useState(null);

//   // Filter data based on selected date
//   const filteredData = selectedDate
//     ? data.filter(entry => new Date(entry.Order_Date).toDateString() === selectedDate.toDateString())
//     : data;

//   // Add a new entry
//   const handleAddEntry = (values, { resetForm }) => {
//     setData([...data, values]);
//     resetForm();
//   };

//   // Edit an existing entry
//   const handleEditEntry = (values, { resetForm }) => {
//     const updatedData = data.map(entry => (entry.ID === values.ID ? values : entry));
//     setData(updatedData);
//     resetForm();
//     setEditingEntry(null);
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Home Page
//       </Typography>

//       <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

//       <Typography variant="h6" gutterBottom>
//         Add New Entry
//       </Typography>
//       <Formik
//         initialValues={{
//           ID: '',
//           Delivery_person_ID: '',
//           Delivery_person_Age: '',
//           Restaurant_latitude: '',
//           Restaurant_longitude: '',
//           Delivery_location_latitude: '',
//           Delivery_location_longitude: '',
//           Order_Date: '',
//           Time_Orderd: '',
//           Time_Order_picked: '',
//           Weather_conditions: '',
//           Road_traffic_density: '',
//           Vehicle_condition: '',
//           Type_of_order: '',
//           Type_of_vehicle: '',
//           multiple_deliveries: '',
//           Festival: '',
//           City: '',
//           Time_taken_min: ''
//         }}
//         validationSchema={Yup.object({
//           ID: Yup.string().required('Required'),
//           Delivery_person_ID: Yup.string().required('Required'),
//           Delivery_person_Age: Yup.number().required('Required'),
//           Restaurant_latitude: Yup.number().required('Required'),
//           Restaurant_longitude: Yup.number().required('Required'),
//           Delivery_location_latitude: Yup.number().required('Required'),
//           Delivery_location_longitude: Yup.number().required('Required'),
//           Order_Date: Yup.date().required('Required'),
//           Time_Orderd: Yup.string().required('Required'),
//           Time_Order_picked: Yup.string().required('Required'),
//           Weather_conditions: Yup.string().required('Required'),
//           Road_traffic_density: Yup.string().required('Required'),
//           Vehicle_condition: Yup.string().required('Required'),
//           Type_of_order: Yup.string().required('Required'),
//           Type_of_vehicle: Yup.string().required('Required'),
//           multiple_deliveries: Yup.string().required('Required'),
//           Festival: Yup.string().required('Required'),
//           City: Yup.string().required('Required'),
//           Time_taken_min: Yup.number().required('Required')
//         })}
//         onSubmit={handleAddEntry}
//       >
//         {({ values, handleChange, setFieldValue }) => (
//           <Form>
//             <TextField
//               name="ID"
//               label="ID"
//               value={values.ID}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Delivery_person_ID"
//               label="Delivery Person ID"
//               value={values.Delivery_person_ID}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Delivery_person_Age"
//               label="Delivery Person Age"
//               type="number"
//               value={values.Delivery_person_Age}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Restaurant_latitude"
//               label="Restaurant Latitude"
//               type="number"
//               value={values.Restaurant_latitude}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Restaurant_longitude"
//               label="Restaurant Longitude"
//               type="number"
//               value={values.Restaurant_longitude}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Delivery_location_latitude"
//               label="Delivery Location Latitude"
//               type="number"
//               value={values.Delivery_location_latitude}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Delivery_location_longitude"
//               label="Delivery Location Longitude"
//               type="number"
//               value={values.Delivery_location_longitude}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Order_Date"
//               label="Order Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               value={values.Order_Date}
//               onChange={(e) => setFieldValue('Order_Date', e.target.value)}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Time_Orderd"
//               label="Time Ordered"
//               type="time"
//               InputLabelProps={{ shrink: true }}
//               value={values.Time_Orderd}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Time_Order_picked"
//               label="Time Order Picked"
//               type="time"
//               InputLabelProps={{ shrink: true }}
//               value={values.Time_Order_picked}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Weather_conditions"
//               label="Weather Conditions"
//               value={values.Weather_conditions}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Road_traffic_density"
//               label="Road Traffic Density"
//               value={values.Road_traffic_density}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Vehicle_condition"
//               label="Vehicle Condition"
//               value={values.Vehicle_condition}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Type_of_order"
//               label="Type of Order"
//               value={values.Type_of_order}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Type_of_vehicle"
//               label="Type of Vehicle"
//               value={values.Type_of_vehicle}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="multiple_deliveries"
//               label="Multiple Deliveries"
//               value={values.multiple_deliveries}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Festival"
//               label="Festival"
//               value={values.Festival}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="City"
//               label="City"
//               value={values.City}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               name="Time_taken_min"
//               label="Time Taken (min)"
//               type="number"
//               value={values.Time_taken_min}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//             />
//             <Button type="submit" variant="contained" color="primary">
//               Add Entry
//             </Button>
//           </Form>
//         )}
//       </Formik>

//       <Typography variant="h6" gutterBottom>
//         Edit Entry
//       </Typography>
//       {editingEntry && (
//         <Formik
//           initialValues={editingEntry}
//           validationSchema={Yup.object({
//             ID: Yup.string().required('Required'),
//             Delivery_person_ID: Yup.string().required('Required'),
//             Delivery_person_Age: Yup.number().required('Required'),
//             Restaurant_latitude: Yup.number().required('Required'),
//             Restaurant_longitude: Yup.number().required('Required'),
//             Delivery_location_latitude: Yup.number().required('Required'),
//             Delivery_location_longitude: Yup.number().required('Required'),
//             Order_Date: Yup.date().required('Required'),
//             Time_Orderd: Yup.string().required('Required'),
//             Time_Order_picked: Yup.string().required('Required'),
//             Weather_conditions: Yup.string().required('Required'),
//             Road_traffic_density: Yup.string().required('Required'),
//             Vehicle_condition: Yup.string().required('Required'),
//             Type_of_order: Yup.string().required('Required'),
//             Type_of_vehicle: Yup.string().required('Required'),
//             multiple_deliveries: Yup.string().required('Required'),
//             Festival: Yup.string().required('Required'),
//             City: Yup.string().required('Required'),
//             Time_taken_min: Yup.number().required('Required')
//           })}
//           onSubmit={handleEditEntry}
//         >
//           {({ values, handleChange, setFieldValue }) => (
//             <Form>
//               <TextField
//                 name="ID"
//                 label="ID"
//                 value={values.ID}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//                 disabled
//               />
//               <TextField
//                 name="Delivery_person_ID"
//                 label="Delivery Person ID"
//                 value={values.Delivery_person_ID}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Delivery_person_Age"
//                 label="Delivery Person Age"
//                 type="number"
//                 value={values.Delivery_person_Age}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Restaurant_latitude"
//                 label="Restaurant Latitude"
//                 type="number"
//                 value={values.Restaurant_latitude}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Restaurant_longitude"
//                 label="Restaurant Longitude"
//                 type="number"
//                 value={values.Restaurant_longitude}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Delivery_location_latitude"
//                 label="Delivery Location Latitude"
//                 type="number"
//                 value={values.Delivery_location_latitude}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Delivery_location_longitude"
//                 label="Delivery Location Longitude"
//                 type="number"
//                 value={values.Delivery_location_longitude}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Order_Date"
//                 label="Order Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={values.Order_Date}
//                 onChange={(e) => setFieldValue('Order_Date', e.target.value)}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Time_Orderd"
//                 label="Time Ordered"
//                 type="time"
//                 InputLabelProps={{ shrink: true }}
//                 value={values.Time_Orderd}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Time_Order_picked"
//                 label="Time Order Picked"
//                 type="time"
//                 InputLabelProps={{ shrink: true }}
//                 value={values.Time_Order_picked}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Weather_conditions"
//                 label="Weather Conditions"
//                 value={values.Weather_conditions}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Road_traffic_density"
//                 label="Road Traffic Density"
//                 value={values.Road_traffic_density}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Vehicle_condition"
//                 label="Vehicle Condition"
//                 value={values.Vehicle_condition}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Type_of_order"
//                 label="Type of Order"
//                 value={values.Type_of_order}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Type_of_vehicle"
//                 label="Type of Vehicle"
//                 value={values.Type_of_vehicle}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="multiple_deliveries"
//                 label="Multiple Deliveries"
//                 value={values.multiple_deliveries}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Festival"
//                 label="Festival"
//                 value={values.Festival}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="City"
//                 label="City"
//                 value={values.City}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 name="Time_taken_min"
//                 label="Time Taken (min)"
//                 type="number"
//                 value={values.Time_taken_min}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <Button type="submit" variant="contained" color="primary">
//                 Save Changes
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       )}

//       <Box my={2}>
//         <Typography variant="h6" gutterBottom>
//           Entries
//         </Typography>
//         <TableComponent data={filteredData} onEdit={(entry) => setEditingEntry(entry)} />
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import TableComponent from './TableComponent';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DatePickerComponent from './DatePickerComponent';
import { v4 as uuidv4 } from 'uuid';

const HomePage = ({ data, setData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  // Filter data based on selected date
  const filteredData = selectedDate
    ? data.filter(entry => new Date(entry.Order_Date).toDateString() === selectedDate.toDateString())
    : data;
console.log("filterdata : ", filteredData);
  // Handle form submission
  const handleFormSubmit = (values, { resetForm }) => {
    if (currentEntry) {
      // Editing existing entry
      const updatedData = data.map(entry => (entry.ID === values.ID ? values : entry));
      setData(updatedData);
      setCurrentEntry(null);
    } else {
      // Adding new entry
      const newEntry = {
        ...values,
        ID: uuidv4(),
      };
      //setData([...data, values]);
      setData([...data, newEntry]);
    }
    resetForm();
     setShowForm(false); // Hide form after submission

    // const newData = {
    //   ...values,
    //   ID: data.length + 1,
    // };

    // setData((prevData) => {
    //   const updatedData = [...prevData, newData];
    //   console.log("Updated Data:", updatedData);
    //   return updatedData;
    // }); 
  };

  // Toggle form visibility and set entry for editing
  const handleShowForm = (entry = null) => {
    setCurrentEntry(entry);
    setShowForm(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>

      <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleShowForm()}
        style={{ marginBottom: 20 }}
      >
        {showForm ? 'Cancel' : 'Add Entry'}
      </Button>

      {showForm && (
        <Formik
          initialValues={currentEntry || {
            ID: '',
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
            ID: Yup.string().required('Required'),
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
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <TextField
                name="ID"
                label="ID"
                value={values.ID}
                onChange={handleChange}
                fullWidth
                margin="normal"
                disabled={!!currentEntry} // Disable ID field when editing
              />
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
                onChange={(e) => setFieldValue('Order_Date', e.target.value)}
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
              <Button type="submit" variant="contained" color="primary">
                {currentEntry ? 'Save Changes' : 'Add Entry'}
              </Button>
            </Form>
          )}
        </Formik>
      )}

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Entries
        </Typography>
        <TableComponent data={filteredData} onEdit={(entry) => setCurrentEntry(entry)} key={filteredData.length} />
        
      </Box>
    </Box>
  );
};

export default HomePage;
