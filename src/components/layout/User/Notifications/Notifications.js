import React from "react";

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar"
import MenuUser from '../MenuUser/MenuUser';
import Notificacao from "../../../pages/SidebarUser/Notificacao/Notificacao";

export default function Notifications(){
    return(
        <div className='Container-content'>
        <div>
        <HeaderNavBar />
        </div>
        <div className='cc'>
            <div className='cc-A'>
                <MenuUser />
            </div>
            <div className='cc-B'>
                <Notificacao/>                       
            </div>
        </div>
    </div>
    )
}