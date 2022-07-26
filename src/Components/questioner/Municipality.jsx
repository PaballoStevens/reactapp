import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Municipality() {

const metroplitan = [
    { title: 'City of Ekurhuleni Metroplitan' },
    { title: 'City of Johannesburg Metroplitan' },
    { title: 'City of Tshwane Metroplitan' },
    
  ];

    return(
       <React.Fragment>
       <CssBaseline />
       <Container fixed>
         <Box sx={{  height: '100vh' }}>
         <Stack spacing={3} sx={{ width: 500 }} padding={10}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={metroplitan}
        getOptionLabel={(option) => option.title}
        defaultValue={[metroplitan[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
    <Link to="/Retails"className="justify-content-end">Next <ArrowForwardIcon/></Link>
         </Box>
       </Container>
     </React.Fragment>
    );
}

export default Municipality;