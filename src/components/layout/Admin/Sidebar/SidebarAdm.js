import React from 'react';
import './sidebarAdm.css';

import { Link } from 'react-router-dom';

import Home from '@mui/icons-material/Home'
import User from '@mui/icons-material/Person'
import Notifications from '@mui/icons-material/Notifications'
import Estatistics from '@mui/icons-material/BarChart'
import Policy from '@mui/icons-material/Policy'
import Business from '@mui/icons-material/Business'
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import Settings from '@mui/icons-material/Settings'
import Door from '@mui/icons-material/DoorBack'
import Chat from '@mui/icons-material/Chat'

import Logo from '../../../../logoAdm.png';

export default function SideBarAdm() {
    return (
        <>
            <div className='SideBarAdm'>
                <div className="Logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="Menu">
                    <ul>
                       <Link to='/adm' className='lSBA'>  <Home className='i'/> <li> Dashboard  </li> </Link>
                       <Link to='/adm/Usuarios' className='lSBA'>  <User className='i'/> <li> Usuários  </li> </Link>
                       <Link to='/adm/Notificacoes' className='lSBA'>  <Notifications className='i'/> <li> Notificações  </li> </Link>
                       <Link to='/adm/Denuncias' className='lSBA'>  <Policy className='i'/> <li> Denuncias  </li> </Link>
                    </ul>
                </div>
                <div>
                    <ul>                       
                    <Link to='/adm/Agentes' className='lSBA'>  <DynamicFeed className='i'/> <li> Agentes  </li> </Link>
                       <Link to='/adm/Categorias' className='lSBA'>  <DynamicFeed className='i'/> <li> Produtos  </li> </Link>
                       <Link to='/adm/Servicos' className='lSBA'>  <Business className='i'/> <li> Serviços  </li> </Link>
                       <Link to='/adm/Definicoes' className='lSBA'>  <Settings className='i'/> <li> Definições  </li> </Link>
                       <Link to='' className='lSBA'>  <Door className='i'/> <li> Sair  </li> </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}