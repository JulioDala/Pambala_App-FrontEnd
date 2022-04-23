import React from 'react'
import './produto.css'

export default function AddSubProd() {
    return (
        <>
            <div className='AddSubProd'>
                <div className='containerAdm'>
                    <form>
                        <h4>Adicionar Subcategoria</h4>
                        <h6>
                            Escreva o nome da nova subcategoria dos produtos que pretendes adicionar
                        </h6>
                        <input type='text' placeholder='Insira o nome da subcategoria' />
                        <button>Adicionar</button>
                        <button>Fechar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
