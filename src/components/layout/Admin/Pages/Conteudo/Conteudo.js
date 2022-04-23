import React from 'react'
import './conteudo.css'

import { Link } from 'react-router-dom';
import Star from '@mui/icons-material/Star'

export default function PageConteudo() {
    return (
        <>
            <div className='Dashboard'>
                <div className='pDashboard'>
                    <div>
                        <h1> Classificação da Aplicação </h1>
                        <span>Caixa de entrada</span>
                    </div>
                    <div className='ppConteudo'>
                        <div className='pconteudo'>
                            <div>
                                <h4> PAMBALA </h4>
                            </div>
                            <div>
                                <h4>
                                    A aplicação Pambala recebeu uma avaliação de <b>Manuel Roda</b> apartir da sua conta.
                                </h4>
                                <h3>Avaliação</h3>
                                <div className='prtConteudo'>
                                    <Star className='i' />
                                    <Star className='i' />
                                    <Star className='i' />
                                    <Star className='i' />
                                    <Star className='i' />
                                </div>
                                <h4>
                                    Continue melhorando o desempenho da aplicação e nos atraia novos usuarios.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pConteudo'>
                    <div>
                        <div className='ctrl'>
                            <button> Arquivar </button>
                            <button> Eliminar </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}