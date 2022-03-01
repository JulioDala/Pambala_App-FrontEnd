import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import HeaderAdmin from '../../HeaderAdmin';

import './Estatisticas.css'

const mdTheme = createTheme();

function DashboardContent({ title }) {


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeaderAdmin title="Estatísticas" />
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
              <main>
                <div className="main_container">
                  <div className="main__title">
                    <div className="main__greeting">
                      <h1>Estatísticas Gerais da Aplicação</h1>
                    </div>
                  </div>

                  <div className="main__cards">
                    <div className="card">
                      <i className="text-lightblue"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Número de Pambaleiros</p>
                        <span className="font-bold text-title">1</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-red"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Número de admins</p>
                        <span className="font-bold text-title">1</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-red"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Número de admins</p>
                        <span className="font-bold text-title">1</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-green"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Lorem ipsum dolor</p>
                        <span className="font-bold text-title">0</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-red"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Lorem ipsum dolor</p>
                        <span className="font-bold text-title">0</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-yellow"></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Lorem ipsum dolor</p>
                        <span className="font-bold text-title">0</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Lorem ipsum dolor</p>
                        <span className="font-bold text-title">0</span>
                      </div>
                    </div>

                    <div className="card">
                      <i className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
                      <div className="card_inner">
                        <p className="text-primary-p">Lorem ipsum dolors<br /> de motorista</p>
                        <span className="font-bold text-title">0</span>
                      </div>


                    </div>

                  </div>
                  <div className="main__title">
                    <div className="main__greeting">
                      <h1>Estatísticas Mensais</h1>
                    </div>
                  </div>
                </div>
              </main>
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