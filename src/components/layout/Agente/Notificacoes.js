import React from 'react'
import SideBar from './SideBar.js'
import Content from './Content.js'
import ChatAgente from "../../pages/Chat/Chat"

import { Link } from 'react-router-dom';
import Img from '../../../img/frm/perfil.png'

import './Estilos/agente.css'

function Notificacoes(){
	const vetor = [1,2,3]
	return(

		<>
			<div className='Agente'>
				<div> <SideBar/> </div> 
				<div className="full"> 

				{vetor.map(({nome})=>(
				 <div className='ccNot'>
                    <Link to='/adm/Notificacoes/Conteudo' className='lk'>
                        <div className='lNot'>
                            <div className='clNotImg'>
                                <img src={Img} alt='Foto' />
                            </div>
                            <div className='clNotDate'>
                                <div> <h4>Carla Madeira</h4> </div>
                                <div> <h5>Classificação da Plataforma</h5> </div>
                                <div> <h6>Carla Madeira avaliou a plataforma com uma mensagem. </h6> </div>
                            </div>
                        </div>
                    </Link>
                </div>

				))}


				 </div> 
			</div>
		</>
		)
}

export default Notificacoes;