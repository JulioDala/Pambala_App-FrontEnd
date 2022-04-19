import React from 'react'
import './produto.css'

import { Link } from 'react-router-dom';
import Business from '@mui/icons-material/Delete'
import DynamicFeed from '@mui/icons-material/Edit'

export default function pProdutosAdm(){
    return(
        <>
        <div className='Dashboard'>
            <div>
                <div className='cmdPdt'>
                    <div className='cmd'>
                        <button>Adicionar</button>
                    </div>
                    <div className='cmd'>
                        <form>
                            <input type='text' placeholder='Insira a pesquisa' />
                        </form>
                    </div>
                </div>
                <div className='pdtAdm'>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Subcategoria</td>
                            <td>Data Ingressão</td>
                            <td>Controles</td>
                        </tr>
                        <tr>
                            <td>56489</td>
                            <td>Bebidas</td>
                            <td>12 / 02 / 2022</td>
                            <td>
                            <button> <DynamicFeed/> </button>
                            <button> <Business/> </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}