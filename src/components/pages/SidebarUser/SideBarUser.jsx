import React from 'react'
import { useState } from 'react'
import "./sidebaruser.css"

import Foto_Perfil from '../../../img/client.jpg'

import Home from '@mui/icons-material/Close';

import Heart from '@mui/icons-material/Close';
import Person from '@mui/icons-material/Person';
import Favorite from '@mui/icons-material/Favorite';
import Notifications from '@mui/icons-material/Notifications';
import Door from '@mui/icons-material/DoorBack';
import Shield from '@mui/icons-material/Shield';
import Propagand from '@mui/icons-material/Send';

import { Link } from 'react-router-dom';
import ModalUsuarioLog from './Usuario/ModalUsuario/ModalUsuarioLog/ModalUsuarioLog';

export default function SideBarUser() {
    const [openModal4, setOpenModal4] = useState(false);
    return (

        <div classname="container-sidebar">
            { openModal4 && <ModalUsuarioLog closeModal={setOpenModal4} />}   
            <div className="container-user">
                <div className='container-user-Date'>
                    <div className="container-user-photo-user">
                        <img src={Foto_Perfil} className='user-image-photo' alt="Foto de Perfil" />
                    </div>

                    <div className="container-user-name-user">
                        <span className="user-name-user">  Nomedousuariofinal </span>
                    </div>
                    <div className="container-user-button">
                        <button className='user-button-edit'> Editar Foto de Perfil </button>
                    </div>
                </div>
                <div className='container-ul'>
                    <ul>
                        <Link to="/Perfil/Usuario" className='Link-user'>
                            <li className='container-ul-li'>
                                <i> <Person className='li-Icon' /> </i> <span className='container-ul-li-span'> Perfil </span>
                            </li>
                        </Link>
                        <Link to="/Perfil/Favorito" className='Link-user'>
                            <li className='container-ul-li'>
                                <i> <Favorite className='li-Icon' /> </i> <span className='container-ul-li-span'> Favoritos </span>
                            </li>
                        </Link>
                        <Link to="/Perfil/Anunciados" className='Link-user'>
                            <li className='container-ul-li'>
                                <i> <Propagand className='li-Icon' /> </i> <span className='container-ul-li-span'> Anunciados </span>
                            </li>
                        </Link>
                        <Link to="/Perfil/Promocao" className='Link-user'>
                            <li className='container-ul-li'>
                                <i> <Shield className='li-Icon' /> </i> <span className='container-ul-li-span'> Promovidos </span>
                            </li>
                        </Link>
                        <Link to="/Perfil/Promocoes" className='Link-user'>
                            <li className='container-ul-li'>
                                <i> <Notifications className='li-Icon' /> </i> <span className='container-ul-li-span'> Notificações </span>
                            </li>
                        </Link>
                        <Link to="" className='Link-user' onClick={() => {setOpenModal4(true);}}>
                            <li className='container-ul-li'>
                                <i> <Door className='li-Icon' /> </i> <span className='container-ul-li-span'> Sair </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

