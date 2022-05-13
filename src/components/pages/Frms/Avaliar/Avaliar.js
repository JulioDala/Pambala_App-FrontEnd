import React from 'react'
import './avaliar.css'

import Rating from '@mui/material/Rating';

export default function Avaliar({ closeModal }){
	return(
		<div className='fnd' onClick={() => closeModal(false)} >
		 
			<div className='Corpo'>
				<Rating className='rts' />
				<h4> "Avaliação por estrela" </h4>

				<textarea placeholder='Escreva a sua Avaliação'></textarea>

				<input className='btnSbmt' type='submit' /> 
			
				
			</div>
		</div>
		)
}