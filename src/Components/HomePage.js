// import React, { useState } from 'react';
// import { Box, Button, Typography, Dialog } from '@mui/material';
// import TableComponent from './TableComponent'
// import AddEntryDialog from './AddEntryDialog';
// import DatePickerComponent from './DatePickerComponent' ;

// const convertDateFormat = (dateString) => {
//   // Convert 'DD-MM-YYYY' to 'YYYY-MM-DD'
//   const [day, month, year] = dateString.split('-');
//   return `${year}-${month}-${day}`;
// };


// const HomePage = ({ data, setData }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');
//   const[showFlag, setshowFlag] = useState(false);
//   const [filteredData, setFilteredData] = useState(data);

//   // Open the add entry dialog
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   // Close the add entry dialog
//   const handleClose = () => {
//     setOpen(false);
    
//   };

//   // Handle adding a new entry
//   const handleAddEntry = (newEntry) => {
//     // setData([...data, newEntry]);
//     // handleClose();
//     if (newEntry) {
//       const updatedData = [...data, newEntry];
//       setData(updatedData);

//       if (selectedDate) {
//         const filteredData = updatedData.filter(
//           (entry) => convertDateFormat(entry.Order_Date) === selectedDate
//         );
//         setFilteredData(filteredData);
//       } else {
//         setFilteredData(updatedData);
//       }
//     }
//     handleClose();
//   };

//   const handleDateChange = (event) => {
//     // setSelectedDate(event.target.value);
//     // setshowFlag(true);
//     setSelectedDate(event.target.value);
//     const filtered = data.filter(
//       (entry) => convertDateFormat(entry.Order_Date) === event.target.value
//     );
//     setFilteredData(filtered);
//   };

//   // Filter data based on selected date
// //   const filteredData = selectedDate ? data.filter((entry) => convertDateFormat(entry.Order_Date) === selectedDate) : data;
// // console.log(filteredData);
//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         All Deliveries Data
//       </Typography>
//       <Box marginBottom={2}>
//         <label htmlFor="order-date">Filter by Order Date: </label>
//         <input
//           id="order-date"
//           type="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </Box>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Add New Entry
//       </Button>

//        <TableComponent data={showFlag ? filteredData : data} />

//       <Dialog open={open} onClose={handleClose}>
//         <AddEntryDialog onAddEntry={handleAddEntry} />
//       </Dialog>
//     </Box>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Dialog } from '@mui/material';
import TableComponent from './TableComponent';
import AddEntryDialog from './AddEntryDialog';

const convertDateFormat = (dateString) => {
  // Convert 'DD-MM-YYYY' to 'YYYY-MM-DD'
  const [day, month, year] = dateString.split('-');
  return `${year}-${month}-${day}`;
};

const HomePage = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  // Open the add entry dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the add entry dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handle adding a new entry
  const handleAddEntry = (newEntry) => {
    if (newEntry) {
      const updatedData = [...data, newEntry];
      setData(updatedData);

      if (selectedDate) {
        const filtered = updatedData.filter(
          (entry) => convertDateFormat(entry.Order_Date) === selectedDate
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(updatedData);
      }
    }
    setShowFilteredData(true); // Toggle to display the updated table
    handleClose();
  };

  // Handle date change
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    if (date) {
      const filtered = data.filter(
        (entry) => convertDateFormat(entry.Order_Date) === date
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }

    setShowFilteredData(true);
  };

  useEffect(() => {
    // Update filteredData when data changes if a date is selected
    if (selectedDate) {
      const filtered = data.filter(
        (entry) => convertDateFormat(entry.Order_Date) === selectedDate
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedDate]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        All Deliveries Data
      </Typography>
      <Box marginBottom={2}>
        <label htmlFor="order-date">Filter by Order Date: </label>
        <input
          id="order-date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Entry
      </Button>

      <TableComponent data={showFilteredData ? filteredData : data} />

      <Dialog open={open} onClose={handleClose}>
        <AddEntryDialog onAddEntry={handleAddEntry} />
      </Dialog>
    </Box>
  );
};

export default HomePage;
