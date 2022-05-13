import React from 'react';
import './IndexSeguranca.css';
import './rspIndexSeguranca.css';


import Modal from './mSeguranca.js'

import { useState } from 'react'

import Navbar from '../../../layout/Navbar';
import imagem from '../../../../img/ImgSeguranca/problemas-no-e-commerce.jpg'
import imagem1 from '../../../../img/ImgSeguranca/compras-online.jpg'
import imagem2 from '../../../../img/ImgSeguranca/e-commerce.png'
import imagem3 from '../../../../img/ImgSeguranca/Use.PNG'
import imagem4 from '../../../../img/ImgSeguranca/image.jpg'
import imagem5 from '../../../../img/ImgSeguranca/image5.jpg'
import imagem6 from '../../../../img/ImgSeguranca/i512132.webp'
import imagem7 from '../../../../img/ImgSeguranca/image4.jpg'
import imagem8 from '../../../../img/ImgSeguranca/image7.jpg'
import imagem9 from '../../../../img/ImgSeguranca/Internet.jpg'
import FooterAdmin from '../../../FooterAdmin';

export default function Seguranca() {
    const [openSeguranca, setOpenSeguranca] = useState(false);
    return (
        <div>
        { openSeguranca && <Modal closeModal={setOpenSeguranca} />}
            <div>
                <Navbar />
            </div>
            <div className='Seguranca'>
                <div className='cSeguranca'>
                    <div className='A'>
                        <div>
                            <h1>Segurança</h1>
                        </div>
                        <div>
                            <h3>
                                Garantir a sua segurança e promover uma navegação tranquila em nossa plataforma é essencial para todos nós.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='ccSeguranca'>
                    <div className='AB'>
                        <h1>BURLAS</h1> <button onClick={() => {setOpenSeguranca(true);}}>Saber mais</button>
                    </div>
                    <div className='B'>
                        <div className='WhatsApp'>
                            <div className='WhatsApp-A'>
                                <div>
                                    <h3>Burlas nas redes sociais</h3>
                                </div>
                                <div className=''>
                                    <h4>
                                        Os burladores podem se passar por representantes de empresas e entrarem em contacto com vitimas atraves de números de telefones.
                                    </h4>
                                </div>
                            </div>

                        </div>
                        <div className='Invasao'>
                            <div className='AI'>
                                <img src={imagem6} alt='' />
                            </div>
                            <div className='AIA'>
                                <div>
                                    <h3>Boato (ou hoax)</h3>
                                    a mensagem tem conteúdo falso e alarmante e  geralmente é enviada por uma empresa importante ou órgão governamental, e até mesmo por um conhecido.
                                </div>
                                <div>
                                    <button onClick={() => {setOpenSeguranca(true);}}>Saber mais</button>
                                </div>
                            </div>
                        </div>
                        <div className='Invasao'>
                            <div className='AI'>
                                <img src={imagem1} alt='' />
                            </div>
                            <div className='AIA'>
                                <div>
                                    <h3>Pharming</h3>
golpe que envolve o redirecionamento da navegação do usuário para sites falsos. A consequência será o vazamento de dados pessoais e financeiros.
                                </div>
                                <div>
                                    <button  onClick={() => {setOpenSeguranca(true);}}>Saber mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AB'>
                        <h1>PAMBALAS</h1> <button  onClick={() => {setOpenSeguranca(true);}}>Saber mais</button>
                    </div>
                    <div className='CD'>
                        <div className='Cd-space'>
                            <div className='Cd-img'>
                                <img src={imagem9} alt='' />
                            </div>
                            <div className='Cd-itens'>
                                <div className='Cd-itens-A'>
                                    <div>
                                        <h3>
                                            Phishing
                                        </h3>
                                    </div>
                                    <div>
                                        <h4>
                                            Um golpista tenta obter dados pessoais e financeiros de um usuário utilizando técnicas de engenharia social. A consequência pode ser o vazamento de informações pessoais e financeiras, além de infectar o computador com códigos maliciosos.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='Cd-itens-B'>
                                <button  onClick={() => {setOpenSeguranca(true);}}> Entender </button>
                            </div>
                        </div>
                        <div className='Cd-space'>
                            <div className='Cd-img'>
                                <img src={imagem8} alt='' />
                            </div>
                            <div className='Cd-itens'>
                                <div className='Cd-itens-A'>
                                    <div>
                                        <h3>
                                            Golpes de comércio
                                        </h3>
                                    </div>
                                    <div>
                                        <h4>
                                            exploram a relação de confiança do usuário nos negócios on-line. A vítima pode ser atraída por uma oferta imperdível e não receber a mercadoria comprada ou o pagamento por um produto vendido, além de passar dados seus ao golpista. Um golpista induz a vítima a fornecer informações
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='Cd-itens-B'>
                                <button onClick={() => {setOpenSeguranca(true);}}> Entender </button>
                            </div>
                        </div>
                        <div className='Cd-space'>
                            <div className='Cd-img'>
                                <img src={imagem4} alt='' />
                            </div>
                            <div className='Cd-itens'>
                                <div className='Cd-itens-A'>
                                    <div>
                                        <h3>
                                            Antecipação de recursos
                                        </h3>
                                    </div>
                                    <div>
                                        <h4>
                                           Um golpista induz a vítima a fornecer informações confidenciais ou a realizar um pagamento adiantado com a promessa de que esta receberá um benefício. Em algum tempo, a vítima percebe que o benefício não existe, que foi vítima de um... Em um golpe que pode facilmente
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='Cd-itens-B'>
                                <button onClick={() => {setOpenSeguranca(true);}}> Entender </button>
                            </div>
                        </div>
                    </div>
                    <div className='AB'>
                        <h1>Como me proteger?</h1> <button  onClick={() => {setOpenSeguranca(true);}}>Saber mais</button>
                    </div>
                    <div className='D'>
                        <div className='cD'>
                            <div className='ccD'>
                                <h3>Vendendo</h3><button>Saiba mais</button>
                            </div>
                            <div className='ccD'>
                                <h3>Comprando</h3> <button>Saiba mais</button>
                            </div>
                        </div>
                        <div className='cD'>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem3} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> Furto de identidade </h4>
                                    <div className='cD-cc'>
                                        alguém se passa por outra pessoa para obter vantagens ilícitas. A vítima poderá perder dinheiro e temporariamente crédito, ou até ter sua reputação abalada.
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem7} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> Golpes de reparos </h4>
                                    <div className='cD-cc'>
                                        Em um golpe que começa no mundo real e rapidamente segue para o virtual, você recebe uma ligação de um funcionário que diz trabalhar na "Microsoft" ou em outra grande empresa de software para resolver problemas no computador...
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> Golpes de fraude  </h4>
                                    <div className='cD-cc'>
                                        Depois de grandes desastres naturais ou outras tragédias de grande visibilidade, você tem vontade de ajudar como pode, e os golpistas se aproveitam dessas situações. 
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem5} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> Golpes de beneficiário </h4>
                                    <div className='cD-cc'>
                                        Você recebe um e-mail de alguém que precisa transferir dinheiro rapidamente. Muitas vezes, esses e-mails vêm de pessoas que dizem ser da realeza (provavelmente você já ouviu falar do golpe do príncipe da Nigéria)...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='E'>
                    <div>
                       {/* <h2>Usar a PAMBALA é a forma mais segura, simples e prática de anunciar produtos on-line. Isso porque ao realizar suas transações em nossa plataforma, você...
                            Fazer uma divulgação on-line na Pambala</h2>
                        <button>Anunciar</button>*/}
                    </div>
                </div>
                <FooterAdmin />
            </div>

            



        </div>
    )
}
