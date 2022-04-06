import React from 'react';

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import MenuUser from '../MenuUser/MenuUser';
import Favorito from '../../../pages/SidebarUser/Favoritos/Favorito';

export default function Liked() {
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
                        <Favorito/>                       
                    </div>
                </div>
            </div>

        </>
    )
}