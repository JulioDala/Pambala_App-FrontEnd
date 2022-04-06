import React from 'react';
import { useState } from 'react'
import './headerUser.css';

import Logo from '../../../../logo.png'
import JAD from '../../../../img/JAD.jpeg';

import Search from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Comment';

import Car from "@mui/icons-material/CarRepair";
import Settings from "@mui/icons-material/Settings"
import FoodBank from "@mui/icons-material/FoodBankOutlined"
import Travel from "@mui/icons-material/TravelExplore"
import CardTravel from "@mui/icons-material/CardTravel"
import Computer from "@mui/icons-material/Computer"
import Person from "@mui/icons-material/Print"
import MAnuncio from "../ModalUser/Anunciar/mAnuncio";

import {Link} from "react-router-dom";

export default function HeaderUser() {
    const [AbrirAnuncio, FecharAnuncio] = useState(false);
    return (
        <>        
        { AbrirAnuncio && <MAnuncio closeModal={FecharAnuncio} />}
            <div className='Container-Header'>
            
                <div className='Container-Header-nav'>
                    <div className='ContainerLogo'>
                        <img src={Logo} alt='' className="Photo-Logo" />
                        <span>PAMBALA</span>
                    </div>
                    <div className='Container-Nav'>
                        <div className="Content-navBar">
                            <div className='nav-header'>
                                <ul>
                                    <Link to="/index/usuario" className='LinkMenu'><li>Inicio</li></Link>
                                    <Link to="/index/Usuario/Loja" className='LinkMenu'><li>Produtos</li></Link>
                                    <Link to="" className='LinkMenu' onClick={() => {FecharAnuncio(true);}}> <li>Anunciar</li> </Link>                                                                      
                                    <Link to="/index/Usuario/Conta" className='LinkMenu'><li>Perfil</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="Content-Search">
                            <form>
                                <input type="search" placeholder='Insira a sua pesquisa' />
                                <button> <Search /> </button>
                            </form>
                        </div>
                        <div className="Container-item-user">
                           <Link to="/index/usuario/Gostos"> <FavoriteIcon className='icons-icons' /></Link>
                           <Link to="/index/usuario/Notificacao"> <NotificationsIcon className='icons-icons' /></Link>
                           <Link to="/index/usuario/Chat"> <ChatIcon className='icons-icons' /></Link>
                            <Link  to="/index/usuario/Conta">
                            <Tooltip title="Foto de Perfil">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" className='Container-Avatar icons-icons' src={JAD} sx={{ width: 35, height: 35, border: 1.5 }} />
                                </IconButton>
                            </Tooltip>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="Container-Header-Filter">
                    <div className="Container-Title-Text">
                        <h1> ANUNCIE AQUI </h1>
                        <h4>Anuncie facilmente os seus produtos e serviços aqui</h4>
                    </div>
                    <div className="Container-form-select">
                        <form>
                            <select>
                                <option>Categoria</option>
                                <option>Produtos</option>
                                <option>Serviços</option>
                            </select>

                            <select>
                                <option>Subcategoria</option>
                                <option>Eletronica</option>
                                <option>Comida</option>
                            </select>

                            <select>
                                <option>Localização</option>
                                <option>Luanda</option>
                                <option>Bengo</option>
                            </select>

                            <select>
                                <option>Rendimento</option>
                                <option>Caro</option>
                                <option>Barato</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="Container-Header-Services">
                    <div className="service-icon">
                        <Car className="icon-service"/>
                    </div>
                    <div className="service-icon">
                        <Computer className="icon-service" alt="Computação"/>
                    </div>
                    <div className="service-icon">
                        <CardTravel className="icon-service"/>
                    </div>
                    <div className="service-icon">
                        <Travel className="icon-service"/>
                    </div>
                    <div className="service-icon">
                        <FoodBank className="icon-service"/>
                    </div>
                    <div className="service-icon">
                        <Person className="icon-service"/>
                    </div>
                    <div className="service-icon">
                        <Settings className="icon-service"/>
                    </div>
                </div>
            </div>

        </>
    )
}