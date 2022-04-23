
import React from 'react';

import Search from '@mui/icons-material/Search';
import Menu from '@mui/icons-material/Menu';

import './topbar.css';
import Img from '../../../../img/frm/perfil.png';
import Logo from '../../../../logo.png';
import {useState} from "react"
import Perfil from '../Modal/Perfil/Perfil';

export default function TopBar() {
    const [abrir, fechar] = useState(false);
    return (
        <>
        { abrir && <Perfil closeModal={fechar} />}
            <div className='TopBar'>
                <div className='topbar'>
                <div className='sga'>                    
                    <img src={Logo} alt='Logo' /> <h5>PAMBALA</h5>
                </div>
                </div>
                <div className='topbar-adm'>
                    <div className='title'>
                       <Menu className='i'/> <h3>DASHBOARD</h3>
                    </div>
                    <div className='frm'>
                        <form>
                            <input type='text' placeholder='Buscar informações' />
                            <button> <Search/> </button>
                        </form>
                        <div>
                            <img src={Img} alt='Avatar' onClick={() => {fechar(true);}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}