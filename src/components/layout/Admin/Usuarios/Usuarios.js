import React from 'react';
import './usuariosAdm.css';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Usuarios from '../Pages/Usuarios/Usuarios'

export default function UsuariosAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Usuarios />
                </div>
            </div>
        </>
    )
}