import React from "react";
import "./menuUser.css";

import JAD from '../../../../img/client.jpg';

import { Link } from "react-router-dom";

import Person from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';
import Notifications from '@mui/icons-material/Notifications';
import Door from '@mui/icons-material/DoorBack';
import Shield from '@mui/icons-material/Shield';
import Propagand from '@mui/icons-material/Send';
import Camera from "@mui/icons-material/CameraAlt"

export default function MenuUser() {
    return (
        <>
            <div className="MenuUserP">
                <div className="MenuUser">
                    <div className="usrNavigation">
                        <header>
                            <div className="mcPhoto">
                                <div><img src={JAD} alt="Foto de Perfil" className="imgPhoto" /></div>
                                <div className="ccCamera"> <Camera /> </div>
                            </div>
                            <div  className="mcaPhoto">
                                <span>nomedeusuario@Pambala</span>
                                <button>Atualizar</button>
                            </div>
                        </header>
                        <nav>
                            <ul>
                                <Link to="/index/usuario/Conta" className="Link"> <Person />  <li>Perfil</li> </Link>
                                <Link to="/index/usuario/Gostos" className="Link">  <Favorite /> <li>Gostados</li> </Link>
                                <Link to="/index/usuario/Promovidos" className="Link">  <Shield />  <li>Promovidos</li> </Link>
                                <Link to="/index/usuario/Notificacao" className="Link">  <Notifications /> <li>Notificações</li> </Link>
                                <Link to="/index/usuario/Anunciados" className="Link">  <Propagand /> <li>Anunciados</li> </Link>
                                <Link to="" className="Link">  <Door /> <li>Sair</li> </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}