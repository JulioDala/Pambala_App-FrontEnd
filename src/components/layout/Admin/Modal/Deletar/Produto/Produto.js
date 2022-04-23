import React from 'react'
import './produto.css'

export default function DelProd(){
    return(
        <>
                <div className='DelProd'>
                    <div className='containerAdm'>
                    <h4>Deletar Subcategoria?</h4>
                        <h6>
                            Tens certeza de que queres eliminar esta subcategoria?
                        </h6>
                        <button>Deletar</button>
                        <button>Fechar</button>
                    </div>
                </div>
        </>
    )
}