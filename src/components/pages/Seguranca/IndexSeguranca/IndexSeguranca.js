import React from 'react';
import './IndexSeguranca.css';
import './rspIndexSeguranca.css';

import Navbar from '../../../layout/Navbar';
import imagem from '../../../../img/ImgSeguranca/problemas-no-e-commerce.jpg'
import imagem1 from '../../../../img/ImgSeguranca/compras-online.jpg'
import imagem2 from '../../../../img/ImgSeguranca/e-commerce.png'
import FooterAdmin from '../../../FooterAdmin';

export default function Seguranca() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='Seguranca'>
                <div className='cSeguranca'>
                    <div className='A'>
                        <div>
                            <h1>Para nós, segurança é muito importante</h1>
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
                        <h1>BURLAS</h1> <button>Saber mais</button>
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
                                <img src={imagem} alt='' />
                            </div>
                            <div className='AIA'>
                                <div>
                                    <h3>Golpe invasão de conta</h3>
                                    O grande objetivo do golpe de invasão de conta é se apropriar da identidade da vítima. Esse processo pode acontecer de diversas formas.
                                </div>
                                <div>
                                    <button>Saber mais</button>
                                </div>
                            </div>
                        </div>
                        <div className='Invasao'>
                            <div className='AI'>
                                <img src={imagem1} alt='' />
                            </div>
                            <div className='AIA'>
                                <div>
                                    <h3>"Golpe de Intermediário”</h3>

                                    Golpe do intermediário
                                    Um dos golpes mais conhecidos no processo de compra e venda de automóveis é o “Golpe do Intermediário”. Esse golpe ati...
                                </div>
                                <div>
                                    <button>Saber mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AB'>
                        <h1>PAMBALAS</h1> <button>Saber mais</button>
                    </div>
                  <div>EM CONSTRUÇÃO</div>
                    <div className='AB'>
                        <h1>Como me proteger?</h1> <button>Saber mais</button>
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
                                        <img src={imagem} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> O meu perfil é seguro? </h4>
                                    <div className='cD-cc'>
                                        As vendas com OLX Pay são mais seguras, mas fique atento às formas de fraude no momento de confirmação do pagamento. Se você optou por ativar...
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> O meu perfil é seguro? </h4>
                                    <div className='cD-cc'>
                                        As vendas com OLX Pay são mais seguras, mas fique atento às formas de fraude no momento de confirmação do pagamento. Se você optou por ativar...
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> O meu perfil é seguro? </h4>
                                    <div className='cD-cc'>
                                        As vendas com OLX Pay são mais seguras, mas fique atento às formas de fraude no momento de confirmação do pagamento. Se você optou por ativar...
                                    </div>
                                </div>
                            </div>
                            <div className='cDD'>
                                <div className='cD-Space'>
                                    <div>
                                        <img src={imagem} className='segImg' alt='' />
                                    </div>
                                    <h4 className='cD-cc'> O meu perfil é seguro? </h4>
                                    <div className='cD-cc'>
                                        As vendas com OLX Pay são mais seguras, mas fique atento às formas de fraude no momento de confirmação do pagamento. Se você optou por ativar...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='E'>
                    <div>
                        <h2>Usar a PAMBALA é a forma mais segura, simples e prática de anunciar produtos on-line. Isso porque ao realizar suas transações em nossa plataforma, você...
                        Fazer uma divulgação on-line na Pambala</h2>
                        <button>Anunciar</button>
                    </div>              
                </div>
                <FooterAdmin/>                
            </div>

            {/*
Golpes conhecidos
Saiba mais
Golpe invasão de conta
O grande objetivo do golpe de invasão de conta é se apropriar da identidade da vítima. Esse processo pode acontecer de diversas fo...


As vendas com OLX Pay são mais seguras, mas fique atento às formas de fraude no momento de confirmação do pagamento. Se você optou por ativar...

Golpe do falso pagamento na OLX Pay
*/}

        </div>
    )
}
