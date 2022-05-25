import React from 'react';

import Foto from '../../../../img/frm/perfil.png'

import AccessAlarms from '@mui/icons-material/AccessAlarms'

export default function ConfirmarAgenda (closeModal){

	return(
		<>	
		 <div className='PerfilUser'>
            <div className="container">
               <div className='img'> 
               		<AccessAlarms className="ione" />
               </div>
               <div className='content'>
               		<div>
               		<h2> Issengo </h2>                     
               		<h3> 25 / 10 / 2022 </h3>
                     <h3> Sambizanga </h3>
                     <h3> 12:30 </h3>
               		           		
               		<button> Guardar </button>
                     <button onClick={() => closeModal(false)} className="fchM"> Cancelar </button>
               		</div>
               </div>
            </div>
        </div>
			
			</>
		);
}