import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';

const theme = createTheme();

function Contacto() {

  return (

    <ThemeProvider theme={theme}>
      {/* Cabeçalho */}
      <Navbar />
      <Box
        sx={{
          marginTop:4,
          display: 'flex',
          flexDirection: 'column',
          mb:3
        }}
      >

        <Grid container spacing={3}>
          {/* Lado Direito da Tela */}
          <Grid item xs={12} md={12} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mx: '10%'
          }}>
            {/* End hero unit */}

            <Grid item xs={6} sm={6} md={6}>
              <Typography gutterBottom variant="h5" component="div" position="rigth" >
                Informações de Contacto
              </Typography>
              <ListItem >
                <ListItemIcon>
                  <Tooltip title="Endereço">
                    <PlaceIcon />
                  </Tooltip >
                </ListItemIcon>
                <ListItemText primary="Luanda, Angola" />

              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <Tooltip title="Telefone">
                    <PhoneIcon />
                  </Tooltip >
                </ListItemIcon>

                <ListItemText primary="+244 928 038 663" />
              </ListItem>
              <ListItem >
                <ListItemIcon>
                  <Tooltip title="E-mail">
                    <EmailIcon />
                  </Tooltip >
                </ListItemIcon>

                <ListItemText primary="pambala@gmail.com" />
              </ListItem >
              <ListItem >
                <ListItemIcon>
                  <Tooltip title="WhatsApp">
                    <WhatsAppIcon />
                  </Tooltip >
                </ListItemIcon>

                <ListItemText primary="+244 928038663" />
              </ListItem >
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Typography gutterBottom variant="h5" component="div" position="rigth">
                Deixe-nos uma mensagem
              </Typography>
              <Grid item sm={6} md={12}  sx={{
                display: 'flex',
                justifyContent: '',
              }}>
                <Grid item sm={6} md={6} sx={{
                mr:1,
              }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome "
                    name="nome"
                    autoComplete="nome"
                    autoFocus
                  />
                </Grid>
                <Grid item sm={6} md={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="sobrenome"
                    label="Sobrenome "
                    name="sobrenome"
                    autoComplete="sobrenome"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="assunto"
                label="assunto "
                name="assunto"
                autoComplete="assunto"
                autoFocus
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Corpo da Mensagem"
                autoFocus
                style={{ width: '100%' }}
              />
              <Stack direction="row-reverse" spacing={2}>
                <Button sx={{ mt: 2,bgcolor: ' #2980b9' }} variant="contained" endIcon={<SendIcon />}>
                  Enviar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Rodapé */}
      <FooterAdmin sx={{ p: 2 }} />
    </ThemeProvider >

  );
}
export default Contacto;