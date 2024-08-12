// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Button, Container, Box } from '@mui/material';
// import HomePage from './Components/HomePage';
// import TotalDataPage from './Components/TotalDataPage';

// // Fetch dataset from GitHub
// const fetchData = async () => {
//   try {
//     const response = await fetch('https://raw.githubusercontent.com/romyboy94/Great-National-Hotel-Indonesian-recipes/main/Zomato%20Dataset.csv');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.text();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     return '';
//   }
// };

// // Parse CSV data
// const parseCSV = (csvText) => {
//   try {
//     const rows = csvText.split('\n').map(row => row.split(','));
//     const headers = rows[0];
//     const data = rows.slice(1).map(row => {
//       const obj = {};
//       row.forEach((value, index) => {
//         obj[headers[index]] = value;
//       });
//       return obj;
//     });
//     return data;
//   } catch (error) {
//     console.error('Failed to parse CSV:', error);
//     return [];
//   }
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [editRow, setEditRow] = useState(null);

//   useEffect(() => {
//     const loadData = async () => {
//       const csvText = await fetchData();
//       const parsedData = parseCSV(csvText);
//       setData(parsedData.slice(0, 100));
//     };
//     loadData();
//   }, []);

//   const handleEdit = (row) => {
//     console.log('Editing row:', row);
//     setEditRow(row);
//   };

//   const handleSave = (updatedRow) => {
//     console.log('Saving row:', updatedRow);
//     setData(data.map(row => row.ID === updatedRow.ID ? updatedRow : row));
//     setEditRow(null);
//   };

//   return (
//     <Router>
//       <Container>
//         <Box my={2}>
//           <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
//           <Button component={Link} to="/total-data" variant="contained" color="secondary" style={{ marginLeft: 10 }}>Total Data</Button>
//         </Box>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 data={data}
//                 onEdit={handleEdit}
//                 onSave={handleSave}
//                 selectedDate={selectedDate}
//                 setSelectedDate={setSelectedDate}
//               />
//             }
//           />
//           <Route
//             path="/total-data"
//             element={
//               <TotalDataPage data={data} />
//             }
//           />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Container, Box } from '@mui/material';
import HomePage from './Components/HomePage';
import TotalDataPage from './Components/TotalDataPage';

// Fetch dataset from GitHub
const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/romyboy94/Great-National-Hotel-Indonesian-recipes/main/Zomato%20Dataset.csv');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return '';
  }
};

// Parse CSV data
const parseCSV = (csvText) => {
  try {
    const rows = csvText.split('\n').map(row => row.split(','));
    const headers = rows[0];
    const data = rows.slice(1).map(row => {
      const obj = {};
      row.forEach((value, index) => {
        obj[headers[index]] = value;
      });
      return obj;
    });
    return data;
  } catch (error) {
    console.error('Failed to parse CSV:', error);
    return [];
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const csvText = await fetchData();
      const parsedData = parseCSV(csvText);
      setData(parsedData.slice(0, 10)); // Limiting to 100 entries for simplicity
    };
    loadData();
  }, []);

  return (
    <Router>
      <Container>
        <Box my={2}>
          <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
          <Button component={Link} to="/total-data" variant="contained" color="secondary" style={{ marginLeft: 10 }}>Total Data</Button>
        </Box>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={data}
                setData={setData}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            }
          />
          <Route
            path="/total-data"
            element={<TotalDataPage data={data} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
