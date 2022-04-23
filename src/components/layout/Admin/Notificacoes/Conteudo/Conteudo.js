import React from 'react';
import './conteudo.css';

import TopBar from '../../TopBar/Topbar';
import SideBarAdm from '../../Sidebar/SidebarAdm';
import Page from '../../Pages/Conteudo/Conteudo'

export default function Conteudo() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Page />
                </div>
            </div>
        </>
    )
}