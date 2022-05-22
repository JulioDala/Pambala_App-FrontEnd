import React from 'react';
import './recent.css'

import img from '../../../img/watch4.jpg'
import List from './List/List.js'

import Rating from '@mui/material/Rating';

import Person from '@mui/icons-material/Person';
import Money from '@mui/icons-material/Money';
import Favorite from '@mui/icons-material/Favorite';
import Tv from '@mui/icons-material/Tv';

export default function Recent (){

const vetor = [{nome:"Júlio Dala"},{nome:"João Dala"},{nome:"Josué Rufino"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"}]

	return(
		<>	
			<div className='CardProduts'  data-aos="fade-left" >
				<div className='Card'>
					{vetor.map(({nome})=>(
						<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra  <button><Favorite/></button> </h2> 
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> {nome}</h5>
							<h5><Money/> 15.000.00 kz</h5>

							<Rating className='rate rt' />
									</div>
					</div>
						))}
				</div>
			</div>
			</>
		);
}