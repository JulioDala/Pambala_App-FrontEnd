import React from 'react'
import SideBar from './SideBar.js'
import Content from './Content.js'

import './Estilos/agente.css'

function Agente(){
	return(
		<>
			<div className='Agente'>
				<div className="SIDEBAR"> <SideBar/> </div> 
				<div className="CONTENT"> <Content/> </div> 
			</div>
		</>
		)
}

export default Agente;