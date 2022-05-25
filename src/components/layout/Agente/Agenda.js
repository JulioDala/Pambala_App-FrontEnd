import React from 'react';
import "./Estilos/agenda.css"

import AccessAlarms from '@mui/icons-material/CalendarToday'
import SideBar from './SideBar.js'

export default function Agendas (){
const vetor = [1,2,3,4,5]
	return(
		<>	
      
		 <div className='Agenda'>
       <div> <SideBar/> </div> 

       {vetor.map(({nome})=>(
            <div className="agenda">
               <div className='Agend'> 
               		<AccessAlarms className="iones" />
               </div>
               <div className='cx'>

                        <h2> Issengo </h2>                     
                        <h3> 25 / 10 / 2022 </h3>
                        <h3> Sambizanga </h3>
                        <h3> 12:30 </h3>
               		<div className="cmd">
                  		           		
                  		<button> Editar </button>
                        <button className="fchM"> Eliminar </button>
               		</div>
               </div>
            </div>
            ))}
        </div>
			
			</>
		);

}