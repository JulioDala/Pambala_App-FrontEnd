import React from 'react'

import Photo from '../../../../img/client.jpg'

export default function Notificacao() {
    return (
        <div classname="container-promocoes">           
            <div className='container-ntf'>               
                <div className='container-ntf-box'>
                    <div className='promocao'>
                        <div className='container-promocao-foto'>
                            <img src={Photo} className='promocao-usuario-foto' alt='Foto de perfil' />
                        </div>
                        <div className='promocao-usuario'>
                            <div>
                                <span className='promocao-usuario-nome'> Carolina Miqueias Vida </span>
                            </div>

                            <div>
                                <span className='promocao-usuario-notificacao'>
                                    Classificou o teu produto com <span className=''> 5 </span> estrelas.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='promocao'>
                        <div className='container-promocao-foto'>
                            <img src={Photo} className='promocao-usuario-foto' alt='Foto de perfil' />
                        </div>
                        <div className='promocao-usuario'>
                            <div>
                                <span className='promocao-usuario-nome'> Carolina Miqueias Vida </span>
                            </div>

                            <div>
                                <span className='promocao-usuario-notificacao'>
                                    Classificou o teu produto com <span className=''> 5 </span> estrelas.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}