import React from 'react';
import './countUser.css';
import ContenUser2 from "../ContentUser2/ContentUser2"
import ContenUser from "../ContentUser/ContentUser"

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import MenuUser from '../MenuUser/MenuUser';

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
                        <ContenUser />
                        <ContenUser2 />
                    </div>
                    
                    
                    
                </div>
            </div>

        </>
    )
}