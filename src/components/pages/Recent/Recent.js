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
	return(
		<>	
			<div className='CardProduts'  data-aos="fade-left" >
				<div className='Card'>
					<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra</h2>
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> Fabricio Marcos</h5>
							<h5><Money/> 15.000.00 kz</h5>

							<Rating className='rate rt' />
							<h5> <span></span> desconto</h5>
							<h5> <span></span> Disponivel</h5>

						</div>
						<div className='ctrl'>
							<button><Tv/></button>
							<button><Favorite/></button>
						</div>
					</div>

					<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra</h2>
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> Fabricio Marcos</h5>
							<h5><Money/> 15.000.00 kz</h5>
							
							<Rating className='rate rt' />
							<h5> <span></span> desconto</h5>
							<h5> <span></span> Disponivel</h5>

						</div>
						<div className='ctrl'>
							<button><Tv/></button>
							<button><Favorite/></button>
						</div>
					</div>
<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra</h2>
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> Fabricio Marcos</h5>
							<h5><Money/> 15.000.00 kz</h5>
							
							<Rating className='rate rt' />
							<h5> <span></span> desconto</h5>
							<h5> <span></span> Disponivel</h5>

						</div>
						<div className='ctrl'>
							<button><Tv/></button>
							<button><Favorite/></button>
						</div>
					</div>

<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra</h2>
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> Fabricio Marcos</h5>
							<h5><Money/> 15.000.00 kz</h5>
							
							<Rating className='rate rt' />
							<h5> <span></span> desconto</h5>
							<h5> <span></span> Disponivel</h5>

						</div>
						<div className='ctrl'>
							<button><Tv/></button>
							<button><Favorite/></button>
						</div>
					</div>
					<div className='item'>
						<div className='img'>
							<img src={img} alt='' />
						</div>
						<div className='details'>
							<h2>Relógio Ultra</h2>
							<h5>Produto</h5>
							<h5>3 meses atras</h5>
							<h5><Person/> Fabricio Marcos</h5>
							<h5><Money/> 15.000.00 kz</h5>
							
							<Rating className='rate rt' />
							<h5> <span></span> desconto</h5>
							<h5> <span></span> Disponivel</h5>

						</div>
						<div className='ctrl'>
							<button><Tv/></button>
							<button><Favorite/></button>
						</div>
					</div>



				</div>
			</div>
			</>
		);
}