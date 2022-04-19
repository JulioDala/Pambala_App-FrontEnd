import React from 'react'
import './usuarios.css'

import { useState } from 'react'

import { Link } from 'react-router-dom';

import Business from '@mui/icons-material/Delete'
import DynamicFeed from '@mui/icons-material/Edit'
import Door from '@mui/icons-material/SelectAll'

import Usuario from '../../Modal/Usuarioss/Usuarios';

export default function PUsuariosAdm(){
    
    const [openmUsuario, setOpenmUsuario] = useState(false);
    return(
        <>        
        { openmUsuario && <Usuario closeModal={setOpenmUsuario} />}
        <div className='Dashboard'>
            <div>
                <div className='Usearch'>
                    <form>
                        <input type='text' placeholder='Buscar Usuario' />
                    </form>
                </div>
            </div>
            <div className='Utable'>
                <table>                   
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Número</td>
                        <td>E-mail</td>
                        <td>Ingressão</td>
                        <td>Controles</td>
                    </tr>
                    <tr>
                        <td>053432</td>
                        <td>Carla Madeira</td>
                        <td>956 764 333</td>
                        <td>cmadeira@gmail.com</td>
                        <td>17/01/2022</td>
                        <td>
                            <button> <Door className='i'/> </button>
                            <button> <DynamicFeed/> </button>
                            <button> <Business/> </button>
                        </td>
                    </tr>
                    <tr>
                        <td>65464</td>
                        <td>Pedro Monteiro</td>
                        <td>945 648 497</td>
                        <td>monteiro@gmail.com</td>
                        <td>01/02/2022</td>
                        <td>
                            <button onClick={() => {setOpenmUsuario(true);}}> <Door className='i'/> </button>
                            <button> <DynamicFeed/> </button>
                            <button> <Business/> </button>
                        </td>
                    </tr>
                    
                </table>
            </div>
        </div>
        </>
    )
}