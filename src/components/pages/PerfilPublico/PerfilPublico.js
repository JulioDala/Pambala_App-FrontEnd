import React from 'react'
import './perfilPublico.css'

import PublicPhoto from '../../../img/client.jpg';
import Image from '../../../img/p10.png';
import Image2 from '../../../img/p9.png';

import Telephone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import WhatsApp from '@mui/icons-material/WhatsApp';
import DateBorn from '@mui/icons-material/DateRange';
import LocationNate from '@mui/icons-material/LocationCity';
import Global from '@mui/icons-material/LocationOn';
import Local from '@mui/icons-material/LocationSearching';
import Chat from '@mui/icons-material/Chat';
import Hor from '@mui/icons-material/Chat';
import Police from '@mui/icons-material/Policy';
import Person from '@mui/icons-material/Person';
import Navbar from '../../layout/Navbar';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function PerfilPublico() {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <Navbar />
            <div className='PP'>

                <div className='PP-1'>
                    {/* abas */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
                        <Tabs>
                            <Tab label="Produtos" {...a11yProps(0)} />
                            <Tab label="Serviços" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel>
                        <div className='ContainerCard'>
                            <div className='Card'>
                                <div className='image'>
                                    <img src={Image} alt='Produto' />
                                </div>
                                <div className='type'>
                                    <h4>Produto </h4>
                                </div>
                                <div className='name'>
                                    <h3>Camisa verde</h3>
                                </div>
                                <div className='timer'>
                                    <h4> 22 / 04 / 2022</h4>
                                </div>
                                <div className='rate'>
                                    <h3> 90.000 Kz </h3>
                                    <h6> Negociavel</h6>
                                </div>
                                <div>
                                    <Rating className='rate' />
                                </div>
                            </div>

                            <div className='Card'>
                                <div className='image'>
                                    <img src={Image2} alt='Produto' />
                                </div>
                                <div className='type'>
                                    <h4>Produto </h4>
                                </div>
                                <div className='name'>
                                    <h3>Camisa Azul</h3>
                                </div>
                                <div className='timer'>
                                    <h4> 20 / 03 / 2022</h4>
                                </div>
                                <div className='rate'>
                                    <h3> 70.000 Kz </h3>
                                    <h6> Negociavel</h6>
                                </div>
                                <div>
                                    <Rating className='rate' />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    
                </div>

                <div className='PerfilPublico'>
                    <div className='PublicPhoto'>
                        <img src={PublicPhoto} alt="Foto de Perfil" />
                    </div>
                    <div className='PublicData'>
                        <div className='PublicName'>
                            <span className=''> Carolina Katter Wins </span>
                        </div>
                        <div className='PublicContact'>
                            <h5> <DateBorn /> 20 de Outubro de 2022 </h5>
                            <h5> <Email /> carlakatter@gmail.com </h5>
                            <h5> <Telephone /> 923 456 998 </h5>
                            <h5> <WhatsApp /> 922 134 786 </h5>
                        </div>
                        <div className='PublicLC'>
                            <div className='PublicLocation'>
                                <h5><Global className='PublicIcon' />Província</h5>
                                <h5><LocationNate className='PublicIcon' />Cidade</h5>
                                <h5><Local className='PublicIcon' />Bairro</h5>
                            </div>
                            <div className="PublicChat">
                                <button> <Chat className='IconPublicChat' /> Mensagem </button>
                                <button> <Police className='IconPublicChat' /> Denunciar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}