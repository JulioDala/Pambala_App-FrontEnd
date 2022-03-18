import React from 'react'
import './favorito.css'
import SideBarUser from '../SideBarUser'

import Photo from '../../../../img/tenis.jpg'
import Photo1 from '../../../../img/p9.png'
import Photo2 from '../../../../img/p2.png'

import Navbar from '../../../layout/Navbar'

import PersonAddPlus from '@mui/icons-material/Home'
import Star from '@mui/icons-material/Star';
import Favorite from '@mui/icons-material/Favorite';

export default function Promocoes() {
    return (
        <div classname="container-favorito">
            <div>
                <Navbar />
            </div>

            <div className='container-fvt'>
                <div>
                    <SideBarUser />
                </div>
                <div className='container-fvt-box'>
                    <div className='favorito'>
                        <div className='favorito-favorito'>
                            <div className='container-favorito-foto'>
                                <img src={Photo} className='favorito-favorito-foto' alt='Foto de perfil' />
                            </div>
                            <div className='favorito-favorito-space'>
                                <span className='favorito-favorito-nome'> Tennis Nike Show </span>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-preco'> Preço:  20.000kz </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-classificacao'> <Star className='star-icon' /> <Star className='star-icon' /> <Star className='star-icon' /> <Star /> <Star /> </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'>Descrição: </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'> Tenis produzido pela Nike Original e capaz de te levar ao ceu. </span>
                                </div>

                            </div>

                        </div>
                        <div className='container-favorito-editar'>
                            <Favorite className='favorite-icon' />
                        </div>
                    </div>

                    <div className='favorito'>
                        <div className='favorito-favorito'>
                            <div className='container-favorito-foto'>
                                <img src={Photo1} className='favorito-favorito-foto' alt='Foto de perfil' />
                            </div>
                            <div className='favorito-favorito-space'>
                                <span className='favorito-favorito-nome'> Tennis Nike Show </span>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-preco'> Preço:  20.000kz </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-classificacao'> <Star className='star-icon' /> <Star className='star-icon' /> <Star className='star-icon' /> <Star /> <Star /> </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'>Descrição: </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'> Tenis produzido pela Nike Original e capaz de te levar ao ceu. </span>
                                </div>

                            </div>

                        </div>
                        <div className='container-favorito-editar'>
                            <Favorite className='favorite-icon' />
                        </div>
                    </div>

                    <div className='favorito'>
                        <div className='favorito-favorito'>
                            <div className='container-favorito-foto'>
                                <img src={Photo2} className='favorito-favorito-foto' alt='Foto de perfil' />
                            </div>
                            <div className='favorito-favorito-space'>
                                <span className='favorito-favorito-nome'> Tennis Nike Show </span>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-preco'> Preço:  20.000kz </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-classificacao'> <Star className='star-icon' /> <Star className='star-icon' /> <Star className='star-icon' /> <Star /> <Star /> </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'>Descrição: </span>
                                </div>
                                <div className='favorito-favorito-space'>
                                    <span className='favorito-favorito-descricao'> Tenis produzido pela Nike Original e capaz de te levar ao ceu. </span>
                                </div>

                            </div>

                        </div>
                        <div className='container-favorito-editar'>
                            <Favorite className='favorite-icon' />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}