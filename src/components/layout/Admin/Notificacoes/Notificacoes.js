import React from 'react';
import './notificacoesAS.css';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Notificacoes from '../Pages/Notifications/Notificacoes'

export default function NotificacoesAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Notificacoes />
                </div>
            </div>
        </>
    )
}