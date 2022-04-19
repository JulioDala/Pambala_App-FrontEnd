import React from 'react';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Definicoes from '../Pages/Definicoes/Definicoes'

export default function DefinicoesAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Definicoes />
                </div>
            </div>
        </>
    )
}