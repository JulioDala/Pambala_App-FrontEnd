import React from 'react'
import './notificacoes.css'

import { Link } from 'react-router-dom';
import Img from '../../../../../img/frm/perfil.png'

export default function pNotificacoesAdm() {
    return (
        <>
            <div className='Dashboard'>
                <div className='ccNot'>
                    <Link to='/adm/Notificacoes/Conteudo' className='lk'>
                        <div className='lNot'>
                            <div className='clNotImg'>
                                <img src={Img} alt='Foto' />
                            </div>
                            <div className='clNotDate'>
                                <div> <h4>Carla Madeira</h4> </div>
                                <div> <h5>Classificação da Plataforma</h5> </div>
                                <div> <h6>Carla Madeira avaliou a plataforma com uma mensagem. </h6> </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/adm/Notificacoes/Conteudo' className='lk'>
                        <div className='lNot'>
                            <div className='clNotImg'>
                                <img src={Img} alt='Foto' />
                            </div>
                            <div className='clNotDate'>
                                <div> <h4>Carla Madeira</h4> </div>
                                <div> <h5>Classificação da Plataforma</h5> </div>
                                <div> <h6>Carla Madeira avaliou a plataforma com uma mensagem. </h6> </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}