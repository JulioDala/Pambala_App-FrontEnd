import React from 'react';
import './indexAPS.css'

import Produto from '@mui/icons-material/ProductionQuantityLimitsOutlined';

export default function indexAPS({ closeModal }) {
    return (
        <>

            <div className="APSmodalBackground">
                <div className="APSmodalContainer">

                    <div className="APSmodalBody">
                        <div className='APS'>
                            <div className='apsHeader'>
                                <div> <h3>Cadastrar Parametro</h3> </div>
                                <div> <Produto className='apsIcon'/> </div>
                            </div>
                            <form>
                                <input type='text' placeholder='Nome do Produto ou Serviço' />
                                <select>
                                    <option>Categoria</option>
                                </select>
                                <div>
                                    <div className='apsUpl'>
                                        <input type='file' placeholder='Adicionar Imagem' />
                                        <input type='file' placeholder='Adicionar Imagem' />
                                    </div>
                                    <div className='apsUpl'>
                                        <input type='file' placeholder='Adicionar Imagem' />
                                        <input type='file' placeholder='Adicionar Imagem' />
                                    </div>
                                </div>
                                <textarea rows='10' placeholder='Descrição'></textarea>

                            </form>
                        </div>

                    </div>
                    <div className="APSmodalFooter">
                        <button  onClick={() => closeModal(false)} >Cancelar</button>
                        <button>Anunciar</button>
                    </div>
                </div>
            </div>
        </>
    )
}