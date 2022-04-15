import React from 'react';
import './admin.css';

import TopBar from './TopBar/Topbar';
import SideBarAdm from './Sidebar/SidebarAdm';

export default function Administrador(){
    return(
        <>
        <div className='Adm'>
            <TopBar/>
            <SideBarAdm/>
        </div>
        </>
    )
}