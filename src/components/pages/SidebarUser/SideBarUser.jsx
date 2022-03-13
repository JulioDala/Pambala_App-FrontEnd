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

