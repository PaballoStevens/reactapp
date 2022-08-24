import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sidebar from './sidebar';

export default function Nav() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="fixed">
        <Box>
            <Sidebar/>
        </Box>    
      </Container>
    </React.Fragment>
  );
}
