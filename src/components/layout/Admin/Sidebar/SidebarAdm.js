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
import Door from '@mui/icons-material/DoorBack'


export default function SideBarAdm() {
    return (
        <>
            <div className='SideBarAdm'>
                <div>
                    <ul>
                       <Link to='' className='lSBA'>  <Home/> <li> Inicio  </li> </Link>
                       <Link to='' className='lSBA'> <User/> <li> Usuários  </li> </Link>
                       <Link to='' className='lSBA'> <Notifications/> <li> Notificações  </li> </Link>
                       <Link to='' className='lSBA'> <Estatistics/> <li> Estatisticas  </li> </Link>
                    </ul>
                </div>
                <div>
                    <ul>
                       <Link to='' className='lSBA'>  <Policy/> <li> Denuncias  </li> </Link>
                       <Link to='' className='lSBA'>  <DynamicFeed/> <li> Categorias  </li> </Link>
                       <Link to='' className='lSBA'>  <Business/> <li> Serviços  </li> </Link>
                       <Link to='' className='lSBA'>  <Door/> <li> Sair  </li> </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}