import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HeaderAdmin from '../../HeaderAdmin';
import FooterAdmin from '../../FooterAdmin';

const mdTheme = createTheme();

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeaderAdmin title="Dashboard" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Conteúdo Principal */}
              <Paper
                sx={{
                  p: 22,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
              <Box sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url()`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#243238',
                fontFamily: 'cursive',
                fontSize: '7rem',
                [mdTheme.breakpoints.down("sm")]: {
                  height: 300,
                  fontSize: '0.5rem'
                }
              }}>
                PAMBALA APP

              </Box>
              </Paper>
            </Grid>
            {/* Rodapé */}

          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}