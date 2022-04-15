import React from 'react';
import './cadastrarU.css'

import Produto from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import imagem from '../../../../img/frm/perfil.png'

import Camera from "@mui/icons-material/CameraAlt"

export default function CadastrarU({ closeModal }) {
    return (
        <>

            <div className="CdsmodalBackground">
                <div className="CdsmodalContainer">

                    <div className="modalBody">
                        <div className='CDS'>
                            <div className='CdsHeader'>
                                <div className=" cdsImg">
                                    <div><img src={imagem} alt="Foto de Perfil" className="" /></div>
                                    <div className=""> <Camera className='cdsCam' /> </div>
                                </div>
                            </div>
                            <form>
                                <input type='text' placeholder='Nome do usuario *' />
                                <input type='Date' placeholder='' />
                                <input type='TEXT' placeholder='Bilhete de Identidade' />
                                <div className='cdsMB'>
                                <select>
                                <option>Masculino</option>
                                    <option>Femenino</option>
                                </select>
                                <select>
                                    <option>Luanda</option>
                                    <option>Lubango</option>
                                    <option>Uíge</option>
                                </select>
                                </div>
                                <div className='cdsMB'>
                                    <input type='text' placeholder='Municipio' />
                                    <input type='text' placeholder='Bairro' />
                                </div>
                                <input type='number' placeholder='Numero de Telefone *' />
                                <input type='email' placeholder='E-mail' />
                                <input type='password' placeholder='Senha' />
                            </form>
                        </div>

                    </div>
                    <div className="CdsmodalFooter">
                        <button onClick={() => closeModal(false)} >Cancelar</button>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}