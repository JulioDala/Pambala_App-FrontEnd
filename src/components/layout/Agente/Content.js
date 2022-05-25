import React from 'react'
import Img from '../../../img/frm/perfil.png'
import img from '../../../img/frm/invasor.png'
import iMG from '../../../img/frm/group.png'


import User from '@mui/icons-material/Edit'
import Estatistics from '@mui/icons-material/Key'
import Chat from '@mui/icons-material/Chat'


import Delete from '@mui/icons-material/Delete'
import SelectAll from '@mui/icons-material/Edit'

import {Link} from "react-router-dom"
import { useState } from 'react'

import Modal from "./Modais/ConfirmarAgenda"


function Content(){

	const vetor = [1,2,3]

	const nome  = "João Silvestre Dala"
	const email  = "JoaoSilvestreDala90@gmail.com"
	const numero = 923567233

	const [AbrirAgenda, FecharAgenda] = useState(false);

	const nota = "Carla"
	return(
		<>
		{ AbrirAgenda && <Modal closeModal={FecharAgenda} />}
			<div className="Content"> 
				<div className="CardUser">
					<div className="Agendar"> Agendar </div>
					<form>
						<input type="text" placeholder="Nota" name="nota" />
						<input type="Date" />
						<input type="time" />
						<select>
							<option> Dia </option>
							<option> Semana </option>
							<option> Mês </option>
							<option> Ano </option>
							<option> Personalizar </option>
						</select>
						<input placeholder="Localização" />
						
				</form>
					<button className="button" onClick={() => {FecharAgenda(true);}}> Agendar </button>
				 </div>


				 <div className="CardUser">
					<div className="Agendar"> Tarefas </div>
					<div className="a">
						<img src={iMG} alt="" />
					</div>
						<div className="span">
							<b>Agente</b> da aplicação é uma entidade que serve de intermediario entre o vendedor e a pessoa que deseja comprar o produto ou adquirir os serviços anunciados na aplicação.
							</div>
					<button className="button"> Ver mais </button>
					
				 </div>

				
				  <div className="CardUser">
					<div className="Agendar">
						Agente
					</div>
					<div className="a">
						<img src={img} alt="" />
					</div>
					<div className="d">
						<h2> {nome} </h2>
						<h5> {email} </h5>
						<h5> +244 {numero}</h5>
							<Link to="/Agente/Perfil" className="link"> <button>  <User className="i"/> </button></Link>
							<Link to="/Agente/Chat" className="link"> <button>  <Chat className="i"/> </button> </Link>
							<Link to="/Agente/Perfil" className="link"> <button>  <Estatistics className="i"/> </button></Link>
					</div>
					

				 </div>


			 </div>
			 
			 
<div className="Content">
<h3> Agendamentos </h3>
			 </div>
			 <div className="Content">

			 	<table>			 		
			 				 				 
                             <tr>
                             <td>Nota</td>
                                <td>Data</td>
                                <td>Hora</td>
                                <td>Tempo de Registro</td>
                                <td>Localidade</td>
                                <td>Ações</td>
                            </tr>

                            {vetor.map((nome)=>(
                            <tr>
                            <td>Issengo</td>
                                <td>22 / 01 / 2022</td>
                                <td>12:30</td>
                                <td>Semana</td>
                                
                                <td>
                                Sambizanga
                                    
                                </td>
                                <td>
                                    <button> <SelectAll/> </button>
                                    <button> <Delete/> </button>
                                </td>
                            </tr>
                            ))}
			 	</table>
			 </div>
		</>
		)
}

export default Content;