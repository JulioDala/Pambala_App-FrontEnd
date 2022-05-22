import React from 'react'
import SideBar from './SideBar.js'
import Content from './Content.js'

import './Estilos/agente.css'

function Agente(){
	return(
		<>
			<div className='Agente'>
				<div> <SideBar/> </div> 
				<div> <Content/> </div> 
			</div>
		</>
		)
}

export default Agente;