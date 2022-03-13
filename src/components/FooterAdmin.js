import PhoneIcon from '@mui/icons-material/Phone'
import Facebook from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email'
import Room from '@mui/icons-material/Room'
import TwitterIcon from '@mui/icons-material/Twitter';
import './styleFooter.css';

import React from 'react';

import { Container, Wrapper, Left, Center, Right, Logo, Title, Desc, SocialContainer, SocialIcon, TitleMd, List, ListItem, ContactItem } from './FooterStyle';

const Footer = () => {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <a href="#" className="logo"> <i className="fas fa-shopping-bag"></i>  Pambala </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita molestiae distinctio facere beatae velit, maiores ullam molestias necessitatibus sapiente.</p>
                </div>

                <div className="box">
                    <h3>links</h3>
                    <a href="#">Casa</a>
                    <a href="#">Loja</a>
                    <a href="#">Contacto</a>
                    <a href="#">Anunciar</a>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <p> <i className="fas fa-home"></i>
                        Luanda, Angola,
                    </p>
                    <p> <i className="fas fa-phone"></i>
                        +910000000
                    </p>
                    <p> <i className="fas fa-globe"></i>
                        pambala@gmail.com
                    </p>
                </div>

            </div>

            <h1 className="credit"> <span>Copyrigth &copy;</span> 2022 | Todos os direitos reservadoss. </h1>

        </section>

    )
}

export default Footer