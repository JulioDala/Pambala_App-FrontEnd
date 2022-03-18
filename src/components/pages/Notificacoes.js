import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';
import SideBarUser from './SidebarUser/SideBarUser';

import './Notificacoes.css'


const mdTheme = createTheme();

function Perfil() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ flexGrow: 1, m: 2 }}>
                {/* div  com o nome das categorias */}
                <Grid container spacing={2}>
                    {/* Lado esquerdo da Tela */}
                    <Grid item sx={{}} xs={6} md={3}>
                        <SideBarUser />
                    </Grid>
                    {/* Lado Direito da Tela */}
                    <Grid item xs={6} md={9}>
                        {/* End hero unit */}
                        {/* <div className="Dados-Perfil">
                            <h1>Dados do Perfil</h1>
                            <div className="frm">
                                <form action="" className="frm-Principal">
                                    <div className="grp-name">
                                        <span className="titlo-dados"> Nome: </span>
                                        <input type="text" className="caixa-dados"/>
                                    </div>

                                    <div className="grp-contact">

                                        <div>
                                            <span className="titlo-dados"> Telefone: </span>
                                            <input type="text" className="caixa-dados" />
                                        </div>
                                        <div>
                                            <span className="titlo-dados"> E-mail: </span>
                                            <input type="text" className="caixa-dados" />
                                        </div>

                                    </div>
                                    <div className="grp-date">
                                        <span className="titlo-dados"> Data de Nascimento: </span>
                                        <input type="datetime" className="caixa-dados" />
                                    </div>
                                    <div className="grp-sector">
                                        <div>
                                            <span className="titlo-dados"> Provincia: </span>
                                            <input type="text" className="caixa-dados" />
                                        </div>
                                        <div>
                                            <span className="titlo-dados"> Morada: </span>
                                            <input type="text" className="caixa-dados" />
                                        </div>

                                    </div>
                                    <div className="grp-password">
                                        <span className="titlo-dados"> Senha: </span>
                                        <input type="password" className="caixa-dados" />
                                    </div>
                                    <div className="grp-btn-Update">
                                        <input type="button" value="Atualizar" className="btn-dados" />
                                    </div>
                                </form>
                            </div>
                        </div> */}

                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider >

    );
}
export default Perfil;
