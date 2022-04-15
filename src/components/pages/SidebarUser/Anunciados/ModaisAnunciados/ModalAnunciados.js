import react from "react";
import './modalanunciados.css';
import ImageProduto from '../../../../../../src/img/p2.png'

import Star from '@mui/icons-material/Star';
import Favorite from '@mui/icons-material/Favorite';

export default function ModalAnunciado({ closeModal }) {
    return (
        <div className="ANCmodalBackground">
            <div className="ANCmodalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalBody-container">
                    <div className='mANC'>
                        <div className='mAnc'>
                            <div className='mAncImg'>
                                <img src={ImageProduto} alt='Foto' />
                            </div>
                        </div>
                        <div className='mAncTitulo'>
                            <h3>Camisa Ngomax Shine</h3>
                            <div>
                                <h4> 7.000kz </h4>
                            </div>
                            <div>
                                <Star className='mStr' />
                                <Star className='mStr' />
                                <Star className='mStr' />
                                <Star className='mStr' />
                                <Star className='mStr' />
                            </div>
                            <div>
                                <span>Camisa do melhor tecido Ngomax</span>
                            </div>
                            <div className='mbtn-Menu-ANC'>
                                <button>Ver</button>
                                <button>Editar</button>
                                <button>Eliminar</button>
                                <button>Promover</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}