import React from 'react'
import "./sidebaruser.css"
import ImgUsuario from "./perfil.png"
import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function SideBarUser() {
    return (


        <div classname="container">
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"> <img src={ImgUsuario} alt="" className="Foto-Logo" /> </span>
                        </Link>
                    </li>
                    <li>
                        <span className="title spn-title">
                            nomedeusuario@gmail.com
                        </span>
                        <span className="btn">
                            <button>Editar Foto</button>
                        </span>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"> <AccountCircleIcon/> </span>
                            <span className="title">Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"> <NotificationsIcon/> </span>
                            <span className="title">Notificações</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"> <LocalOfferIcon/>  </span>
                            <span className="title">Promoções</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"><FavoriteIcon/>  </span>
                            <span className="title">Favoritos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"><ShoppingBagIcon/>  </span>
                            <span className="title">Anuncios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="Link">
                            <span className="icon"><LogoutIcon/>  </span>
                            <span className="title">Sair</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

