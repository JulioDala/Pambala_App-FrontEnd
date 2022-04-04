import React from 'react';
import './contentUser.css';

import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded'
import Star from '@mui/icons-material/Star';
import Computer from '@mui/icons-material/Computer';

import Image from '../../../../img/arr_img1.jpg';
import Image2 from '../../../../img/arr_img6.jpg';
import Image3 from '../../../../img/g_img7.jpg';

export default function ContentUser() {
    return (
        <>
            <div className='Container-Content'>
                <div className='Details'>
                    <div className='Title'>
                        <h1>ANUNCIOS PROMOVIDOS</h1>
                    </div>
                    <div className='Details-Title'>
                        <h4>Encontre os melhores produtos disponibilizados pelos usuarios da aplicação.</h4>
                    </div>
                </div>
                <div className='Produt'>
                    <div className='Hand-Next Hand'>
                        <button className='btn-Hand' >
                            <ArrowBackIosNewRounded className='btn-step' />
                        </button>
                    </div>
                    <div className='Produts'>
                        <div className='Produt-Box'>
                            <div className='User-Box-Photo-Produt'>
                                <img src={Image} alt="Foto" className='Photo-Produt' />
                            </div>
                            <div className='User-Box-Details-Produt'>
                                <div className='Icon-Item'> <span className='span-item-icon'> <Computer/>  </span> </div>
                                <div className='Name-Register'> <h4> PC HD ULTRA MEGA </h4> </div>
                                <div className='Date-Register'> <h5> 22 de Setembro de 2021 </h5> </div>
                                <div className='Rate-Register'> <h5> 560.000.00kz </h5> </div>
                                <div className='Stars-Register'>
                                    <span>
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                    </span>
                                </div>
                                <div className='Description-Register'> <span> Um pc ultra potente capaz de rodar divergentes sistemas operacionais, e de molda-los. </span> </div>
                            </div>
                        </div>

                        <div className='Produt-Box'>
                            <div className='User-Box-Photo-Produt'>
                                <img src={Image2} alt="Foto" className='Photo-Produt' />
                            </div>
                            <div className='User-Box-Details-Produt'>
                                <div className='Icon-Item'> <span className='span-item-icon'> <Computer/>  </span> </div>
                                <div className='Name-Register'> <h4> PC HD ULTRA MEGA </h4> </div>
                                <div className='Date-Register'> <h5> 22 de Setembro de 2021 </h5> </div>
                                <div className='Rate-Register'> <h5> 560.000.00kz </h5> </div>
                                <div className='Stars-Register'>
                                    <span>
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                    </span>
                                </div>
                                <div className='Description-Register'> <span> Um pc ultra potente capaz de rodar divergentes sistemas operacionais, e de molda-los. </span> </div>
                            </div>
                        </div>

                        <div className='Produt-Box'>
                            <div className='User-Box-Photo-Produt'>
                                <img src={Image3} alt="Foto" className='Photo-Produt' />
                            </div>
                            <div className='User-Box-Details-Produt'>
                                <div className='Icon-Item'> <span className='span-item-icon'> <Computer/>  </span> </div>
                                <div className='Name-Register'> <h4> PC HD ULTRA MEGA </h4> </div>
                                <div className='Date-Register'> <h5> 22 de Setembro de 2021 </h5> </div>
                                <div className='Rate-Register'> <h5> 560.000.00kz </h5> </div>
                                <div className='Stars-Register'>
                                    <span>
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                        <Star className='Icon-star' />
                                    </span>
                                </div>
                                <div className='Description-Register'> <span> Um pc ultra potente capaz de rodar divergentes sistemas operacionais, e de molda-los. </span> </div>
                            </div>
                        </div>

                    </div>
                    <div className='Hand-Prev Hand'>
                        <button className='btn-Hand' > <ArrowBackIosNewRounded className='btn-Next btn-step' /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}