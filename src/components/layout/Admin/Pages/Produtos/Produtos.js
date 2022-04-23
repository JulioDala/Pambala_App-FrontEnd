import React from 'react'
import './produto.css'

import { Link } from 'react-router-dom';
import Business from '@mui/icons-material/Delete'
import DynamicFeed from '@mui/icons-material/Edit'

import Produto from '../../Modal/Produto/Produto'

import { useState } from 'react'
import DelProd from '../../Modal/Deletar/Produto/Produto';

export default function PProdutosAdm(){
    const [abr, fch] = useState(false);
    const [Abr, Fch] = useState(false);
    return(
        <>
        { abr && <Produto closeModal={fch} />}
        { Abr && <DelProd closeModal={Fch} />}
        <div className='Dashboard'>
            <div>
                <div className='cmdPdt'> 
                    <div className='cmd'>
                        <button  onClick={() => {fch(true);}}>Adicionar</button>
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
                            <button onClick={() => {Fch(true);}}> <Business/> </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}