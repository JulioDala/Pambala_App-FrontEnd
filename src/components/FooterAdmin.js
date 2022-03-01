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
        <section class="footer">

            <div class="box-container">

                <div class="box">
                    <a href="#" class="logo"> <i class="fas fa-shopping-bag"></i>  Pambala </a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita molestiae distinctio facere beatae velit, maiores ullam molestias necessitatibus sapiente.</p>
                </div>

                <div class="box">
                    <h3>links</h3>
                    <a href="#">Casa</a>
                    <a href="#">Loja</a>
                    <a href="#">Contacto</a>
                    <a href="#">Anunciar</a>
                </div>

                <div class="box">
                    <h3>contact us</h3>
                    <p> <i class="fas fa-home"></i>
                        Luanda, Angola,
                    </p>
                    <p> <i class="fas fa-phone"></i>
                        +910000000
                    </p>
                    <p> <i class="fas fa-globe"></i>
                        pambala@gmail.com
                    </p>
                </div>

            </div>

            <h1 class="credit"> Desenvolvido por <span>Júlio Dala</span> | Todos os direitos reservadoss. </h1>

        </section>

    )
}

export default Footer