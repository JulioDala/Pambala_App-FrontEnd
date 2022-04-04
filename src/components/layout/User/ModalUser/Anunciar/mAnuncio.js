import react from "react";
import './mAnunciar.css';

import Produto from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Servico from '@mui/icons-material/CardTravel';

export default function mAnuncio({ closeModal }) {
    return (
        <div className="Fundo">
            <div className="Container-mAnuncio">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="mAnuncio">
                    <div className="mAnuncioService">
                        <div>
                        <Produto className="icon-service"/>
                            <div>
                                <span>
                                    PRODUTO
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mAnuncioService">
                        <div>
                        <Servico className="icon-service"/>
                            <div>
                                <span>
                                    SERVIÇO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}