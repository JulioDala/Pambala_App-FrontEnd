import React from "react";

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import PAgentes from '../Pages/Agentes/Agentes'

export default function Agentes(){
	return(
		<> 
			<div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <PAgentes />
                </div>
            </div>
		</>)
}