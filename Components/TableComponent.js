import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Delivery Person ID</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Restaurant Latitude</TableCell>
            <TableCell>Restaurant Longitude</TableCell>
            <TableCell>Delivery Latitude</TableCell>
            <TableCell>Delivery Longitude</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Time Ordered</TableCell>
            <TableCell>Time Picked</TableCell>
            <TableCell>Weather</TableCell>
            <TableCell>Traffic</TableCell>
            <TableCell>Vehicle Condition</TableCell>
            <TableCell>Order Type</TableCell>
            <TableCell>Vehicle Type</TableCell>
            <TableCell>Multiple Deliveries</TableCell>
            <TableCell>Festival</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Time Taken (min)</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>        
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row.Delivery_person_ID}</TableCell>
              <TableCell>{row.Delivery_person_Age}</TableCell>
              <TableCell>{row.Restaurant_latitude}</TableCell>
              <TableCell>{row.Restaurant_longitude}</TableCell>
              <TableCell>{row.Delivery_location_latitude}</TableCell>
              <TableCell>{row.Delivery_location_longitude}</TableCell>
              <TableCell>{row.Order_Date}</TableCell>
              <TableCell>{row.Time_Orderd}</TableCell>
              <TableCell>{row.Time_Order_picked}</TableCell>
              <TableCell>{row.Weather_conditions}</TableCell>
              <TableCell>{row.Road_traffic_density}</TableCell>
              <TableCell>{row.Vehicle_condition}</TableCell>
              <TableCell>{row.Type_of_order}</TableCell>
              <TableCell>{row.Type_of_vehicle}</TableCell>
              <TableCell>{row.multiple_deliveries}</TableCell>
              <TableCell>{row.Festival}</TableCell>
              <TableCell>{row.City}</TableCell>
              <TableCell>{row.Time_taken_min}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
