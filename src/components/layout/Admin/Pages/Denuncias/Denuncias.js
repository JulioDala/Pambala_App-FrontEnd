import React from 'react'
import './denuncias.css'

import { Link } from 'react-router-dom';

import Warning from '@mui/icons-material/Warning'
import View from '@mui/icons-material/SelectAll'

import Img from '../../../../../img/frm/perfil.png';

export default function pDenunciasAdm(){
    return(
        <>
        <div className='Dashboard'>
            <div className='cDnc'>
                <div className='Dnc'>
                    <div className='img'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='date'>
                        <div className='d'>
                        <div className='date'> <h3>Cristiano Ronaldo</h3> </div>
                        <div className='date'> <h5>64164</h5> </div>
                        <div className='date'> <h5>Fake</h5> </div>
                        </div>
                    </div>
                    <div className='Dnc-btn'>
                        <button> <View/> </button>
                        <button> <Warning/> </button>
                    </div>
                </div>
                <div className='Dnc'>
                    <div className='img'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='date'>
                        <div className='d'>
                        <div className='date'> <h3>Cristiano Ronaldo</h3> </div>
                        <div className='date'> <h4>64164</h4> </div>
                        <div className='date'> <h4>Fake</h4> </div>
                        </div>
                    </div>
                    <div className='Dnc-btn'>
                        <button> <View/> </button>
                        <button> <Warning/> </button>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
}