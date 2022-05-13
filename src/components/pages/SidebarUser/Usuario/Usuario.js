import React from 'react'
import { useState } from 'react'
import './usuario.css'

import SideBarUser from '../SideBarUser'

import Photo from '../../../../img/client.jpg'
import PersonAdd from '../../../../img/icon/person.svg'

import Navbar from '../../../layout/Navbar'

import PersonAddPlus from '@mui/icons-material/Home'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Key from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import ModalUsuarioInfo from './ModalUsuario/ModalUsuarioInfo/ModalUsuarioInfo';
import ModalUsuarioContactos from './ModalUsuario/ModalUsuarioContactos/ModalUsuarioContactos'
import ModalUsuarioQualificacoes from './ModalUsuario/ModalUsuarioQualificacoes/ModalUsuarioQualificacoes'
import ModalUsuarioLog from './ModalUsuario/ModalUsuarioLog/ModalUsuarioLog'

export default function Promocoes() {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    
    return (
        <div classname="container-usuario">            
            { openModal2 && <ModalUsuarioContactos closeModal={setOpenModal2} />}
            { openModal3 && <ModalUsuarioQualificacoes closeModal={setOpenModal3} />}
            { openModal && <ModalUsuarioInfo closeModal={setOpenModal} />}  
          
<Navbar/>

            <div className='container-usr'>
                <SideBarUser/>
                <div className='container-usr-box'>
                    <div className='usuario'>
                        <div className='usuario-usuario'>
                            <div className='container-usuario-foto'>
                                <img src={Photo} className='usuario-usuario-foto' alt='Foto de perfil' />
                            </div>
                            <div className='usuario-usuario-space'>
                                <span className='usuario-usuario-nome'> Carolina Miqueias Vida </span>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> Nascimento:  11 de Setembro de 2002 </span>
                                </div>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> Sexo: Homem </span>
                                </div>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> País de Origem: Angolano </span>
                                </div>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> Província (Estado) de Residencia: Luanda </span>
                                </div>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> Municipio: Sambizanga </span>
                                </div>
                                <div className='usuario-usuario-space'>
                                    <span className='usuario-usuario-data'> Bairro: São Pedro </span>
                                </div>

                            </div>

                        </div>
                        <div className='container-usuario-editar'>
                            <button
                                className='btn-edit-user'
                                onClick={() => {setOpenModal(true);}}>
                                Editar
                            </button>
                        </div>
                    </div>
                    

                    <div className='usuario'>
                        <div className='usuario-usuario'>

                            <div className='usuario-usuario-space'>
                                <span className='usuario-usuario-nome'> Informação de Contactos </span>
                                <div className='usuario-usuario-space usuario-icon-item'>
                                    <PhoneIcon className='usuario-icon' />  <span className='usuario-usuario-data'> 923 475 321</span>
                                </div>
                                <div className='usuario-usuario-space usuario-icon-item'>
                                    <WhatsAppIcon className='usuario-icon' />   <span className='usuario-usuario-data'> Pendente </span>
                                </div>
                                <div className='usuario-usuario-space usuario-icon-item'>
                                    <EmailIcon className='usuario-icon' />  <span className='usuario-usuario-data'> carolinavida@gmail.com </span>
                                </div>

                            </div>
                        </div>
                        <div className='container-usuario-editar'>
                            <button className='btn-edit-user'                                 
                                onClick={() => {setOpenModal2(true);}} > Editar </button>
                        </div>
                    </div>
                     <div className='usuario'>
                        <div className='usuario-usuario'>

                            <div className='usuario-usuario-space'>
                                <span className='usuario-usuario-nome'> Informação de Segurança </span>
                                <div className='usuario-usuario-space usuario-icon-item'>
                                    <Key className='usuario-icon' />  <span className='usuario-usuario-data'> x x x x x x x </span>
                                </div>
                            </div>
                        </div>
                        <div className='container-usuario-editar'>
                            <button className='btn-edit-user'                                 
                                onClick={() => {setOpenModal2(true);}} > Editar </button>
                        </div>
                    </div>
                    <button  className='btn-delete'> Eliminar Conta </button>
                </div>            
            </div>                  
        </div >
    )
}