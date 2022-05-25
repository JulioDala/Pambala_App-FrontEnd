import React from 'react'

import './Estilos/sidebar.css'

import Logo from "../../../logoAdm.png"

import {Link} from 'react-router-dom'

import Home from '@mui/icons-material/Home'
import User from '@mui/icons-material/Person'
import Notifications from '@mui/icons-material/Notifications'
import Estatistics from '@mui/icons-material/BarChart'
import Policy from '@mui/icons-material/Policy'
import Business from '@mui/icons-material/Business'
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import Settings from '@mui/icons-material/CalendarToday'
import Door from '@mui/icons-material/DoorBack'
import Chat from '@mui/icons-material/Chat'

function SideBar(){
	return(
		<>
			<div className='sidebar'>
				<div className='Img'>
							<img src={Logo} alt='' /> 

				</div>
			<ul>
			<Link to='/Agente' className='lSBA'>  <Home className='i'/> <li> Inicio  </li> </Link>
                       <Link to='/Agente/Perfil' className='lSBA'>  <User className='i'/> <li> Perfil  </li> </Link>
                       <Link to='/Agente/Chat' className='lSBA'>  <Chat className='i'/> <li> Mensagens  </li> </Link>
                       <Link to='/Agente/Notificacoes' className='lSBA'>  <Notifications className='i'/> <li> Notificações  </li> </Link>
                       <Link to='/Agente/Agenda' className='lSBA'>  <Settings className='i'/> <li> Agenda  </li> </Link>
                       <Link to='/Agente' className='lSBA'>  <Door className='i'/> <li> Sair  </li> </Link>
			</ul>

			</div>
		</>
		)
}

export default SideBar;