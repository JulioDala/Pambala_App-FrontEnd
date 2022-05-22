import React from 'react';
import './admin.css';

import TopBar from './TopBar/Topbar';
import SideBarAdm from './Sidebar/SidebarAdm';
import Dashboard from './Dashboard/Dashboard'

export default function Administrador() {
    return (
        <>
            <div className='Adm'>
               <div>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Dashboard />
                </div>
               </div>                
            </div>
        </>
    )
}