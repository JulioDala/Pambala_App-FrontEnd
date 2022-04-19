import React from 'react';

import TopBar from '../TopBar/Topbar';
import SideBarAdm from '../Sidebar/SidebarAdm';
import Produto from '../Pages/Produtos/Produtos'

export default function ProdutoAdm() {
    return (
        <>
            <div className='Adm'>
                <TopBar />
                <div className='adm'>
                    <SideBarAdm />
                    <Produto />
                </div>
            </div>
        </>
    )
}