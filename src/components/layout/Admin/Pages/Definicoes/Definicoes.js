import React from 'react'
import './definicoes.css'

import { Link } from 'react-router-dom';
import Img from '../../../../../img/luanda-angola.jpg';

export default function pDefinicoesAdm() {
    return (
        <>
            <div className='Dashboard'>
                <div>
                    <div className='Def'>
                        <form>
                            <div className='def'>
                                <div className='Img'>
                                    <img src={Img} alt='' />
                                </div>
                                <div className='items'>
                                    <input type='file' />
                                    <textarea placeholder='Insira a descrição'></textarea>
                                </div>
                            </div>
                            <div className='def'>
                                <div className='Img'>
                                    <img src={Img} alt='' />
                                </div>
                                <div className='items'>
                                    <input type='file' />
                                    <textarea placeholder='Insira a descrição'></textarea>
                                </div>
                            </div>
                            <div className='def'>
                                <div className='Img'>
                                    <img src={Img} alt='' />
                                </div>
                                <div className='items'>
                                    <input type='file' />
                                    <textarea placeholder='Insira a descrição'></textarea>
                                </div>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}