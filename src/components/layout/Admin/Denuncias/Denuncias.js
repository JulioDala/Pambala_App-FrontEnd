import React from 'react';
import './denuncias.css';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Denuncias from '../Pages/Denuncias/Denuncias'

export default function DenunciasAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Denuncias />
                </div>
            </div>
        </>
    )
}