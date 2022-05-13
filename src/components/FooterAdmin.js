import PhoneIcon from '@mui/icons-material/Phone'
import Facebook from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email'
import Room from '@mui/icons-material/Room'
import TwitterIcon from '@mui/icons-material/Twitter';
import './styleFooter.css';
import Logotipo from "../../src/logo.png"

import React from 'react';

import { Container, Wrapper, Left, Center, Right, Logo, Title, Desc, SocialContainer, SocialIcon, TitleMd, List, ListItem, ContactItem } from './FooterStyle';

const Footer = () => {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <a href="/" className="logo"> <img src={Logotipo} className="logo-logo" alt='' /> <span className="Logo-Title">  </span>  </a>
                    <p className="Descrition-logo">Uma nova plataforma eficiente e sustentavel, desenvolvida para o rico beneficio dos seus usuarios, para que possam divulgar os seus produtos e dar a conhecer os seus serviços.</p>
                </div>

                <div className="box">
                    <h3>Acessos</h3>
                    <a href="#">Casa</a>
                    <a href="#">Loja</a>
                    <a href="#">Perfil</a>
                    <a href="#">Anunciar</a>
                </div>

                <div className="box">
                    <h3>Contactos</h3>
                    <p> <i className="fas fa-home"></i>
                        Luanda, Angola
                    </p>
                    <p> <i className="fas fa-phone"></i>
                        +244 923 000 100
                    </p>
                    <p> <i className="fas fa-globe"></i>
                        pambala@gmail.com
                    </p>
                </div>

            </div>

            <h1 className="credit"> <span>Copyrigth &copy;</span> 2022 | Todos os direitos reservados. </h1>

        </section>

    )
}

export default Footer