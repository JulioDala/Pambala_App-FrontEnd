import React from "react";
import "./headerNavBar.css";

import Logo from '../../../../logo.png'
import JAD from '../../../../img/JAD.jpeg';

import { Link } from "react-router-dom";

import Search from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Comment';

export default function HeaderNavBar() {
    return (
        <>
            <div className="HnbContainer">
                <div  className="Hnb">
                <div className="Hnb-A">
                    <div className="cLogo">
                        <a href="#"> <img src={Logo} className="cpLogo" alt="Logotipo" /> </a>

                    </div>
                    <div>
                        <span>Pambala</span>
                    </div>
                </div>
                <div className="">
                    <div className="cNavBar">
                        <nav>
                            <ul>
                                <li>Inicio</li>
                                <li>Produtos</li>
                                <li>Anunciar</li>
                                <li>Sair</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="Hnb-s">
                    <div className="">

                    </div>
                    <div className="Hnb-c">
                        <div>
                            <form className="HnbForm">
                                <input type="text" placeholder="Busca" />
                                <button> <Search /> </button>
                            </form>
                        </div>
                        <div>
                            <FavoriteIcon className='icons-icons' />
                            <NotificationsIcon className='icons-icons' />
                            <ChatIcon className='icons-icons' />
                            <Tooltip title="Foto de Perfil">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" className='Container-Avatar icons-icons' src={JAD} sx={{ width: 35, height: 35, border: 1.5 }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}