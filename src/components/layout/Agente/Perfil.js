import React from 'react'
import SideBar from './SideBar.js'
import Content from './Content.js'
import ChatAgente from "../../pages/Chat/Chat"

import './Estilos/agente.css'


import img from "../../../img/frm/perfil.png"
import Editar from "@mui/icons-material/Edit"
import Camera from "@mui/icons-material/CameraAlt"


function Perfil(){
	return(
		<>
			<div className='Agente'>
				<div> <SideBar/> </div> 
				<div className="full"> 
					 <div className="containerAdm">
               			 <div className='bd'>
                    <div className='FC'>
                        <div className='Foto'>
                            <div>
                                <img src={img} alt='Foto' />
                                <button> <Camera /> Editar Foto </button>
                                <button> Eliminar Conta </button>
                            </div>

                        </div>
                        <div className='Conteudo'>
                            <div className='spc'>
                                <fieldset>
                                    <legend>Dados Pessoais</legend>
                                    <div className='space'>
                                        <div>
                                            <h6> Nome </h6>
                                            <h4> Manuel Armindo </h4>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Data de Nascimento </h6>
                                            <h4> 22 de Outubro de 2015 </h4>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>

                                            <h6> Sexo </h6>
                                            <h4> Homem </h4>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Provincia </h6>
                                            <h4> Luanda </h4>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Municipio </h6>
                                            <h4> Cacuaco </h4>
                                        </div>
                                    </div>
                                    <div className='space'>
                                        <div>
                                            <h6> Bairro </h6>
                                            <h4> Paraiso </h4>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Contactos</legend>
                                    <div className='space'>
                                        <div>
                                            <h6> Telefone </h6>
                                            <h4> 934678543 </h4>
                                        </div>
                                        <div>
                                            <h6> E-mail </h6>
                                            <h4> mirandamindo@gmail.com </h4>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend> Segurança </legend>
                                    <div className='space'>
                                        <div>
                                            <h6> Palavra-Passe </h6>
                                            <h4> xxxxxxxx </h4>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
				</div> 
			</div>
		</>
		)
}

export default Perfil;