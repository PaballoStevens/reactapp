import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Bank() {

const metroplitan = [
    { title: 'Absa Group Limited' },
    { title: 'African Bank ' },
    { title: 'Bidvest Bank ' },
    { title: 'Capitec Bank' },
    { title: 'Discovery Bank ' },
    { title: 'First National Bank' },
    { title: 'FirstRand Bank ' },
    { title: 'Grindrod Bank Limited' },
    { title: 'Imperial Bank South Africa' },
    { title: 'Investec Bank Limited' },
    { title: 'Mercantile Bank Limited' },
    { title: 'Nedbank Limited' },
    { title: 'Sasfin Bank Limited' },
    { title: 'Standard Bank of South Africa' },
    { title: 'Ubank Limited' },
    { title: 'TymeBank' },
    
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
    <Link href ="/Municipality"className="justify-content-end">Next <ArrowForwardIcon/></Link>
         </Box>
       </Container>
     </React.Fragment>
    );
}

export default Bank;