import React from 'react';
import "./CadastrarAgente.css"

import Foto from "../../../../../img/client.jpg"

export default function CadastrarAgente (){

	return(
		<>	
		 <div className='CdrAgente'>
            <div className="container">
                <div className='bd'>
                    <div className='FC'>
                        <div className='Foto'>
                            <div>
                                <img src={Foto} alt='Foto' />
                            </div>

                        </div>
                        <div className='Conteudo'>
                            <div className='spc'>
                                <fieldset>
                                    <div className='space'>
                                        <div>
                                            <h6> Nome </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Data de Nascimento </h6>
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>

                                            <h6> Sexo </h6>
                                            <select>
                                            	<option> Masculino </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Provincia </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Municipio </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Bairro </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className='space'>
                                        <div>
                                            <h6> Telefone </h6>
                                            <input type="number" />
                                        </div>
                                        <div>
                                            <h6> E-mail </h6>
                                            <input type="email" />
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <div className='space'>
                                        <div>
                                            <h6> Palavra-Passe </h6>
                                            <input type="password" />
                                        </div>
                                    </div>
                                </fieldset>
                                    <button> Cadastrar Agente </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
			
			</>
		);
}