import React, { useEffect, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import HeaderAdmin from '../../HeaderAdmin';
import Modal from '../Modal';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import api from '../../services/api';

const mdTheme = createTheme();

function DashboardContent() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [usuarios, setUsuarios] = useState([]);

  //Função que lista todos os pambaleiros
  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get("/user/listar")
      console.log(response.data)
      setUsuarios(response.data)
    }
    loadUsuarios();
  }, []);

  //Função que excluí um pambaleiro
  async function handleDelete(id) {
    if (window.confirm("Desejas excluir o Pambaleiro?")) {
      const apagar = await api.delete("/user/deletar/" + id);
      if (apagar.status === 200) {
        window.location.href = '/admin/usuarios'
      } else {
        alert("Ocorreu um erro!")
      }
    }
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HeaderAdmin title="Notificações"/>
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
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item sx={{}} xs={12} md={12}>
                    <Typography
                      component="h1"
                      variant="h5"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                    >
                      Listagem de Usuários
                    </Typography>
                    {/* tabela */}
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650, mt: 2 }} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow sx={{ bgcolor: ' #243238' }}>
                            <TableCell sx={{ color: 'white' }}>Id</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">Nome</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">E-mail</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">Assunto</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">Data de Envio</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">Opções</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {usuarios.map((row) => (
                            <TableRow
                              key={row.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.id}
                              </TableCell>
                              <TableCell align="center">{row.nome}</TableCell>
                              <TableCell align="center">{row.email}</TableCell>
                              <TableCell align="center">pedido de informação</TableCell>
                              <TableCell align="center">{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
                              <TableCell align="right">

                                <Grid item sx={{ display: 'flex', justifyContent: 'center' }} >
                                  <Button color="primary" onClick={handleClickOpen}>
                                    <VisibilityIcon />
                                  </Button>

                                  <Modal open={open} handleClose={handleClose} onClick={handleClose}></Modal>


                                  <Button color="secondary" onClick={() => handleDelete(row.id)}>
                                    <DeleteIcon />
                                  </Button>
                                </Grid>

                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Rodapé */}
            {/* <FooterAdmin sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}