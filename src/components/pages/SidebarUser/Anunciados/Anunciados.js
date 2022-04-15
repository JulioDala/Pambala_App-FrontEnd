import React from 'react'
import './anunciados.css'
import { useState } from 'react'

import Photo from '../../../../img/p1.png'

import Navbar from '../../../layout/Navbar'
import SideBarUser from '../SideBarUser'

import Menu from '@mui/icons-material/MenuBookOutlined';
import ModalAnunciado from './ModaisAnunciados/ModalAnunciados'
import { Link } from 'react-router-dom'
import Search from "@mui/icons-material/Search"
import Star from "@mui/icons-material/Star"

export default function Anunciados() {
    const [openModal5, setOpenModal5] = useState(false);
    return (
        <div classname="container-anunciados">
            {openModal5 && <ModalAnunciado closeModal={setOpenModal5} />}
            <div>
                <Navbar />
            </div>
            <div className='container-ancd'>
                <div>
                    <SideBarUser />
                </div>
                <div className='ANCFull'>
                    <div>
                        <div className='ccSearch'>
                        <form>
                                <select>
                                    <option>Produto</option>
                                    <option>Serviço</option>
                                </select>
                            </form>
                            <form>
                                <input type="text" placeholder='Buscar anuncio' />
                                <button> <Search /> </button>
                            </form>                           
                        </div>

                    </div>

                    <div className='ANC'>
                        <div className='ancImg'>
                            <img src={Photo} alt='Foto' />
                        </div>
                        <div className='ancTitulo'>
                            <h3>Camisa Ngomax Shine</h3>
                            <div>
                                <h4> 7.000kz </h4>
                            </div>
                            <div>
                                <Star className='str' /><Star className='str' /><Star className='str' /><Star className='str' /><Star className='str' />
                            </div>
                            <div>
                                <span>Camisa do melhor tecido Ngomax</span>
                            </div>
                            <div className='btn-Menu-ANC'>
                                <button onClick={() => { setOpenModal5(true); }}>Ver</button>
                                <button>Editar</button>
                                <button>Eliminar</button>
                                <button>Promover</button>
                            </div>
                        </div>
                    </div>

                    <div className='ANC'>
                        <div className='ancImg'>
                            <img src={Photo} alt='Foto' />
                        </div>
                        <div className='ancTitulo'>
                            <h3>Camisa Ngomax Shine</h3>
                            <div>
                                <h4> 7.000kz </h4>
                            </div>
                            <div>
                                <Star className='str' /><Star className='str' /><Star className='str' /><Star className='str' /><Star className='str' />
                            </div>
                            <div>
                                <span>Camisa do melhor tecido Ngomax</span>
                            </div>
                            <div className='btn-Menu-ANC'>
                                <button onClick={() => { setOpenModal5(true); }}>Ver</button>
                                <button>Editar</button>
                                <button>Eliminar</button>
                                <button>Promover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}