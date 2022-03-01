import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import tenis from '../../img/tenis.jpg';

import FooterAdmin from '../FooterAdmin';
import SidebarPerfil from '../SidebarPerfil';
import Navbar from '../layout/Navbar';
import SideBarUser from './SidebarUser/SideBarUser';


const mdTheme = createTheme();

function Perfil() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <ThemeProvider theme={mdTheme}>
            <Navbar />
            <Box sx={{ flexGrow: 1, m: 2 }}>
                {/* div  com o nome das categorias */}
                <Grid container spacing={2}>
                    {/* Lado esquerdo da Tela */}
                    <Grid item sx={{}} xs={6} md={3}>
                        {/* SidebarPerfil */}
                        <SideBarUser />
                    </Grid>
                    {/* Lado Direito da Tela */}
                    <Grid item xs={6} md={9}>
                        {/* End hero unit */}
                        <Grid container spacing={1}>
                            <Grid container spacing={1}>
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={12}>
                                        <Card elevation={6}
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'row', width: '100%' }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{ width: '30%', display: { xs: 'none', sm: 'block' } }}
                                                image={tenis}
                                                alt="random"
                                            />
                                            <CardHeader
                                                title={<Typography
                                                    component="h2"
                                                    variant="h5"
                                                    color="inherit"
                                                    noWrap
                                                    sx={{ flexGrow: 1 }}
                                                >
                                                    Título do Produto
                                                </Typography>}
                                                subheader="September 14, 2016"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Grid item>
                                                    <Typography gutterBottom variant="h5" component="div" position="rigth">
                                                        $4.50
                                                    </Typography>
                                                </Grid>
                                                <Grid item sx={{}} xs={12} spacing={2} >
                                                    <Stack direction="row-reverse" spacing={1}>
                                                        <Button sx={{}} variant="contained" >
                                                            Promover
                                                        </Button>
                                                        <Button sx={{}} variant="contained" >
                                                            Apagar
                                                        </Button>
                                                        <Button sx={{}} variant="contained" >
                                                            Editar
                                                        </Button>
                                                    </Stack>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {/* paginaçãoo */}
                <Stack spacing={2}>
                    <Pagination count={10} color="primary" xs={{ pt: 8 }} />
                </Stack>
                {/* Rodapé */}
                <FooterAdmin sx={{ pt: 4 }} />
            </Box>
        </ThemeProvider >

    );
}
export default Perfil;
