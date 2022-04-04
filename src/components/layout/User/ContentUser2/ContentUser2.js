import React from 'react';
import './contentUser2.css';

import Imagem from "../../../../img/g_img7.jpg";

import Star from "@mui/icons-material/Star";

export default function ContentUser2() {
    return (
        <>
            <div className="ContentUser2">
                <div className="ContentUser2-Title">
                    <h1>ULTIMOS ANUNCIOS</h1>
                    <h4>Os anuncios mais recentes publicados estão disponiveis abaixo.</h4>

                </div>
                <div className="Details-ContentUser2">
                    <div className="Photo-Produt-2">
                        <img src={Imagem} alt="" className="Produt-Photo" />
                    </div>

                    <div classeName="Details-Produts">
                        <div className="Details-ContentUser2-2">
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
                        <div className="Details-ContentUser2-3">
                            <button>
                                Ver mais
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Details-ContentUser2">
                    <div className="Photo-Produt-2">
                        <img src={Imagem} alt="" className="Produt-Photo" />
                    </div>

                    <div classeName="Details-Produts">
                        <div className="Details-ContentUser2-2">
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
                        <div className="Details-ContentUser2-3">
                            <button>
                                Ver mais
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Details-ContentUser2">
                    <div className="Photo-Produt-2">
                        <img src={Imagem} alt="" className="Produt-Photo" />
                    </div>

                    <div classeName="Details-Produts">
                        <div className="Details-ContentUser2-2">
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
                        <div className="Details-ContentUser2-3">
                            <button>
                                Ver mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}