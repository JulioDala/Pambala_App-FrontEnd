import React from 'react'
import { useState } from 'react'
import "./sidebaruser.css"
<<<<<<< HEAD

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
=======
import ImgUsuario from "./perfil.png"
import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Navbar from '../../layout/Navbar'

export default function SideBarUser() {
    return (  
        <> 
        <Navbar />

<div className="containesapce">
<div classname="container">
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"> <img src={ImgUsuario} alt="" className="Foto-Logo" /> </span>
>>>>>>> 1531a037e1884ae749b9a1a8142616285540abde
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

        <div className="Dados-Perfil">
                            <h1>Dados do Perfil</h1>
                            <div className="frm">
                                <form action="" className="frm-Principal">
                                    <div className="grp-name">
                                        <span className="titlo-dados"> Nome: </span>
                                        <input type="text" className="caixa-dados"/>
                                    </div>

                                    <div className="grp-contact">
                                        <div>
                                            <span className="titlo_dados"> Telefone: </span>
                                            <input type="text" className="caixa-dados" />
                                        </div>
                                        <div>
                                            <span className="titlo_dados"> E-mail: </span>
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
                        </div>

</div>
                </>  
        
    )
}

