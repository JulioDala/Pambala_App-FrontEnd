import React from 'react';

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import MenuUser from '../MenuUser/MenuUser';
import Anunciados from '../../../pages/SidebarUser/Anunciados/Anunciados';

export default function Publish() {
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
                        <Anunciados/>                       
                    </div>
                </div>
            </div>
        </>
    )
}