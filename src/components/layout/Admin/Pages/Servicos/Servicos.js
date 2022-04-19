import React from 'react'
import './servicos.css'

import { Link } from 'react-router-dom';
import Delete from '@mui/icons-material/Delete'
import SelectAll from '@mui/icons-material/Edit'

export default function pServicosAdm() {
    return (
        <>
            <div className='Dashboard'>
                <div className='srv'>
                    <div className='cbtn'>
                        <button>Adicionar</button>
                    </div>
                    <div className='frm'>
                        <form>
                            <input type='text' placeholder='Insira a sua busca' />
                        </form>
                    </div>
                </div>
                <div className='cfrm'>
                    <div>
                        <table>
                            <tr>
                                <td>ID</td>
                                <td>Subcategoria</td>
                                <td>Data de Registro</td>
                                <td>Controles</td>
                            </tr>
                            <tr>
                                <td>564654</td>
                                <td>Ladrilho</td>
                                <td>22 / 01 / 2022</td>
                                <td>
                                    <button> <SelectAll/> </button>
                                    <button> <Delete/> </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}