import react from "react";
import './mAnunciar.css';

import Produto from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Servico from '@mui/icons-material/CardTravel';

import { Link } from "react-router-dom";

export default function mAnuncio({ closeModal }) {
    return (
        <div className="Fundo">
            <div className="Container-mAnuncio">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="mAnuncio">
                    <div className="mAnuncioService">
                        <Link to="/index/usuario/Anunciar">
                            <div>
                                <Produto className="icon-service" />
                                <div>
                                    <span>
                                        PRODUTO
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="mAnuncioService">
                        <Link to="/index/usuario/Anunciar">
                            <div>
                                <Servico className="icon-service" />
                                <div>
                                    <span>
                                        SERVIÇO
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>

        </div >
    )
}