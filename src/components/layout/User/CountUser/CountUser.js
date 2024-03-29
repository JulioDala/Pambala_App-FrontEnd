import React from 'react';
import './countUser.css';
import ContenUser2 from "../ContentUser2/ContentUser2"
import ContenUser from "../ContentUser/ContentUser"

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import MenuUser from '../MenuUser/MenuUser';
import Usuario from '../../../pages/SidebarUser/Usuario/Usuario';

export default function CountUser() {
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
                        <Usuario/>                       
                    </div>
                </div>
            </div>

        </>
    )
}