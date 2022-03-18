import react from "react";
import './modalanunciados.css';
import ImageProduto from '../../../../../../src/img/tenis.jpg'

import Star from '@mui/icons-material/Star';
import Favorite from '@mui/icons-material/Favorite';

export default function ModalAnunciado({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalTitle">
                    <h1>Tennis Nike Show </h1>
                </div>
                <div className="modalBody-container">
                    <div className="modalbody-foto">
                        <img src={ImageProduto} className='imageProduto' alt="" />
                    </div>
                    <div className="modalbody-preco">
                        <span className="precoProduto"> 20.000.00 kz  </span>
                    </div>
                    <div className='favorito-favorito-space'>
                        <span className='favorito-favorito-classificacao'> <Star className='star-icon' /> <Star className='star-icon' /> <Star className='star-icon' /> <Star /> <Star /> </span>
                    </div>
                    <div className='favorito-favorito-space modalbody-descricao'>
                        <span className='favorito-favorito-descricao'>Descrição: </span>
                    </div>
                    <div className='favorito-favorito-space'>
                        <span className='favorito-favorito-descricao'> Tenis produzido pela Nike Original e capaz de te levar ao ceu. Capaz ainda de te refrescar em tempo de chuva </span>
                    </div>
                </div>

            </div>

        </div>
    )
}