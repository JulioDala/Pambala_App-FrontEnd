import React from 'react'
import './promocoes.css'
import SideBarUser from './SidebarUser/SideBarUser'

import Photo from '../../img/client.jpg'

import Navbar from '../layout/Navbar'

export default function Promocoes() {
    return (
        <div classname="container-promocoes">
            <div>
                <Navbar />
            </div>

            <div className='container-ntf'>
                <div>
                    <SideBarUser />
                </div>
                <div className='container-ntf-box'>
                    <div className='promocao'>
                        <div className='container-promocao-foto'>
                            <img src={Photo} className='promocao-usuario-foto' alt='Foto de perfil' />
                        </div>
                        <div className='promocao-usuario'>
                            <div>
                                <span className='promocao-usuario-nome'> Carolina Miqueias Vida </span>
                            </div>

                            <div>
                                <span className='promocao-usuario-notificacao'>
                                    Classificou o teu produto com <span className=''> 5 </span> estrelas.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='promocao'>
                        <div className='container-promocao-foto'>
                            <img src={Photo} className='promocao-usuario-foto' alt='Foto de perfil' />
                        </div>
                        <div className='promocao-usuario'>
                            <div>
                                <span className='promocao-usuario-nome'> Carolina Miqueias Vida </span>
                            </div>

                            <div>
                                <span className='promocao-usuario-notificacao'>
                                    Classificou o teu produto com <span className=''> 5 </span> estrelas.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}