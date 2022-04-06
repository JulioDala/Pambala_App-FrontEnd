import React from 'react';

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import MenuUser from '../MenuUser/MenuUser';
import Promocao from '../../../pages/SidebarUser/Promocao/Promocao';

export default function Shield() {
    return (
        <>
            <div className='Container-content'>
                <div>
                <HeaderNavBar />
                </div>
                <div className='cc'>
                    <div className='cc-A'>
                        <MenuUser />
                    </div>
                    <div className='cc-B'>
                        <Promocao/>                       
                    </div>
                </div>
            </div>
        </>
    )
}