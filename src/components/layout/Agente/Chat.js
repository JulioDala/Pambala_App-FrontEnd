import React from 'react'
import SideBar from './SideBar.js'
import Content from './Content.js'
import ChatAgente from "../../pages/Chat/Chat"

import './Estilos/agente.css'

function Chat(){
	return(
		<>
			<div className='Agente'>
				<div> <SideBar/> </div> 
				<div className="full"> <ChatAgente/> </div> 
			</div>
		</>
		)
}

export default Chat;