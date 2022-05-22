import React from 'react';
import Modal from '../../Modal/Formularios/CadastrarAgente';
import ModalUser from '../../Modal/Agente/Perfil.js';
import { useState } from 'react'

import Delete from '@mui/icons-material/Delete'
import SelectAll from '@mui/icons-material/Edit'

import Foto from '../../../../../img/client.jpg'

export default function Agentes (){

const [AbrModal, FchModal] = useState(false);
const [AbrModalUser, FchModalUser] = useState(false);

const vetor = [{nome:"Josué Rufino"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"}]
	return(
		<>	
		
			<div className='Dashboard'>
			{ AbrModal && <Modal closeModal={FchModal} />}
            { AbrModalUser && <ModalUser closeModal={FchModalUser} />}

					<div className='srv'>
                    <div className='cbtn'>
                        <button onClick={() => {FchModal(true);}}>Adicionar</button>
                    </div>
                </div>
                <div className='cfrm'>
                    <div>
                        <table>                           

							<tr>
                                <td>Foto</td>
                                <td>Id</td>
                                <td>Agente</td>
                                <td>Endereço</td>
                                <td>E-mail</td>
                                <td>Telefone</td>
                                <td>Data de Registro</td>
                                <td>Controles</td>
                            </tr>
                            {vetor.map((nome)=>(						
							
                            <tr onClick={() => {FchModalUser(true);}}>
                                
                                <td> <img src={Foto} alt='' /> </td>
                                <td>564654</td>
                                <td>Juliana Coração</td>
                                <td>Luanda, Cacuaco, Sambizanga</td>
                                <td>julistraga@gmail.com</td>
                                <td>923456123</td>
                                <td>22 / 01 / 2022</td>
                                <td>
                                <checkbox> </checkbox>
                                    <button> <SelectAll/> </button>
                                    <button> <Delete/> </button>
                                </td>
                            </tr>
							))}
                        </table>
                    </div>
                </div>
			</div>
			</>
		);
}