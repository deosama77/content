import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function MainContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {children}
      </Container>
    </React.Fragment>
  );
}
