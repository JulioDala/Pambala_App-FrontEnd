import React from 'react';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Servicos from '../Pages/Servicos/Servicos'

export default function ServicosAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Servicos />
                </div>
            </div>
        </>
    )
}