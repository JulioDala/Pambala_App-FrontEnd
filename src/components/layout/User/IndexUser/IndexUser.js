import React from 'react';
import './indexUser.css';

import HeaderUser from '../HeaderUser/HeaderUser';
import FooterUser from '../FooterUser/FooterUser';
import ContentUser from '../ContentUser/ContentUser';
import ContentUser2 from '../ContentUser2/ContentUser2';
import ContentUser3 from '../ContentUser3/ContentUser3';

export default function IndexUser() {
    return (
        <>
            <HeaderUser />            
            <ContentUser />
            <ContentUser2 />
            <ContentUser3 />
            <FooterUser />
        </>
    )
}