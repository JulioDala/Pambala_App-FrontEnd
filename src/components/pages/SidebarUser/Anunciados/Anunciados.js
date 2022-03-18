import React from 'react'
import './anunciados.css'
import { useState } from 'react'
import SideBarUser from '../SideBarUser'

import Photo from '../../../../img/tenis.jpg'
import Photo1 from '../../../../img/p9.png'
import Photo2 from '../../../../img/p2.png'

import Navbar from '../../../layout/Navbar'

import Star from '@mui/icons-material/Star';
import Favorite from '@mui/icons-material/Favorite';
import Delete from '@mui/icons-material/Delete';
import Menu from '@mui/icons-material/MenuBookOutlined';
import ModalAnunciado from './ModaisAnunciados/ModalAnunciados'
import { Link } from 'react-router-dom'

export default function Anunciados() {
    const [openModal5, setOpenModal5] = useState(false);
    return (
        <div classname="container-anunciados">
            { openModal5 && <ModalAnunciado closeModal={setOpenModal5} />}
            <div>
                <Navbar />
            </div>

            <div className='container-ancd'>
                <div>
                    <SideBarUser />
                </div>
                <div className='container-ancd-box'>
                    
                    <div className='anunciados'>
                        <div className='anunciados-anunciados'>
                            <div className='container-anunciados-foto'>
                                <img src={Photo} className='anunciados-anunciados-foto' alt='Foto de perfil' />
                            </div>
                            <div className='anunciados-anunciados-space'>
                                <span className='anunciados-anunciados-nome'> Tennis Nike Show </span>

                            </div>

                        </div>
                        <div className='container-anunciados-editar'>
                            <Link to='' className='Link-Hover' onClick={() => { setOpenModal5(true); }}>
                                <Menu className='favorite-icon' />
                            </Link>
                        </div>
                    </div>

                    <div className='anunciados'>
                        <div className='anunciados-anunciados'>
                            <div className='container-anunciados-foto'>
                                <img src={Photo} className='anunciados-anunciados-foto' alt='Foto de perfil' />
                            </div>
                            <div className='anunciados-anunciados-space'>
                                <span className='anunciados-anunciados-nome'> Tennis Nike Show </span>

                            </div>

                        </div>
                        <div className='container-anunciados-editar'>
                            <Link to='' className='Link-Hover' onClick={() => { setOpenModal5(true); }}>
                                <Menu className='favorite-icon' />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}