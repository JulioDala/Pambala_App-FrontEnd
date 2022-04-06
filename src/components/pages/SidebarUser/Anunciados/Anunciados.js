import React from 'react'
import './anunciados.css'
import { useState } from 'react'

import Photo from '../../../../img/tenis.jpg'

import Navbar from '../../../layout/Navbar'

import Menu from '@mui/icons-material/MenuBookOutlined';
import ModalAnunciado from './ModaisAnunciados/ModalAnunciados'
import { Link } from 'react-router-dom'
import Search from "@mui/icons-material/Search"

export default function Anunciados() {
    const [openModal5, setOpenModal5] = useState(false);
    return (
        <div classname="container-anunciados">
            { openModal5 && <ModalAnunciado closeModal={setOpenModal5} />}
           <div>
           <div className='ccSearch'>
               <form>
                   <input type="text" placeholder='Buscar' />
                   <button> <Search/> </button>
               </form>
           </div>

           </div>
            <div className='container-ancd'>
              
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