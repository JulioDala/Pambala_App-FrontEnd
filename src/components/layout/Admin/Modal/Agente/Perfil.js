import React from 'react';
import './perfil.css'

import Foto from '../../../../../img/client.jpg'

export default function Perfil (){

	return(
		<>	
		 <div className='PerfilUser'>
            <div className="container">
               <div className='img'> 
               		<img src={Foto} alt='' />
               </div>
               <div className='content'>
               		<div>
               		<h2> Juliana Coração</h2>
               		<h6> Julicoracao@gmail.com</h6>
               		<h6> +244 945 258 654 </h6>             		

               		<h6> 15/07/2000 </h6>
               		<h6> Id: 2348756 </h6>
               		<button> Notificar </button>
               		<button> Mensagem </button>
               		
               		<h6> Luanda </h6>
               		<h6> Sambizanga </h6>
               		<h6> São Pedro da Barra </h6>
               		</div>
               </div>
            </div>
        </div>
			
			</>
		);
}