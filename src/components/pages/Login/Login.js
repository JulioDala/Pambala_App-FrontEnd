import react from "react";
import './login.css';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Person from "@mui/icons-material/Person";
import {useState} from 'react';

import Perfil from "@mui/icons-material/Person"

import { createTheme, ThemeProvider } from '@mui/material/styles';

import api from '../../services/api';
import { setIdUsuario, setNomeUsuario, login } from '../../services/auth';

export default function ModalLogin({ closeModal }) {
    const theme = createTheme();

function Entrar() 
{

  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [openModalSign, setOpenModalSign] = useState(true);

  async function handleSubmit() {
    const response = await api.post('/user/login', { email, senha });
    console.log(response.data)
    if (response.status === 200) {
      if (response.data.status === 1 && response.data.tipo === 1) {
        login(response.data.token);
        setIdUsuario(response.data.id)
        setNomeUsuario(response.data.nome)
        window.location.href = '/'
      } else if (response.data.status === 1 && response.data.tipo === 2) {
        login(response.data.token);
        setIdUsuario(response.data.id)
        setNomeUsuario(response.data.nome)
        window.location.href = '/admin/estatisticas'
      }
    } else if (response.status === 400) {
      alert('Erro ao cadastrar o usuário')
    }
  }};
    return (
        <div className="Login">
            <div className="ccLogin">
                <div className="modalTitle">
                    <Perfil className="ssP" />
                    <h1>login</h1>
                </div>
                <div className="modalBody">
                <ThemeProvider theme={theme}>
      {/* Cabeçalho */}
      
      <Container component="main" maxWidth="xs" maxHeight="xs">
        <Box
          sx={{
            marginTop: 0,
            marginBottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        >
          <Paper elevation={0} sx={{ p: 1 }}>
                    
            <TextField className='text-field'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email "
              name="email"
              autoComplete="email"
              value=""
              onChange=""
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              value=""
              onChange=""
            />
            <Button
              type="submit"
              className='btn-send'
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, py: 1, bgcolor: ' rgb(53, 118, 202)', fontSize: 12, fontWeight: 600 }}
              onClick=""
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component="a" href="/Cadastrar" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link component="a" variant="body2" className='Link-Acess'>
                  {"Não tens uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>

                </div>               
            </div>

        </div>
    )
}