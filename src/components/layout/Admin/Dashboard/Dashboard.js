import React from 'react'
import './dashboard.css'

import { Link } from 'react-router-dom';

import User from '@mui/icons-material/Person'
import Business from '@mui/icons-material/Business'
import DynamicFeed from '@mui/icons-material/DynamicFeed'

import Delete from '@mui/icons-material/Delete'
import SelectAll from '@mui/icons-material/SelectAll'

export default function Dashboard() {
    return (
        <>
            <div className='Dashboard'>
                <div>
                    <div className='dashboard'>
                        <div className='item'>
                            <div className='cItem-Icon'> <User className='i' /> </div>
                            <div className='cItem'>
                                <div className=''> <h3>6.546</h3> </div>
                                <div> <h4>Usuarios</h4> </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='cItem-Icon'> <DynamicFeed className='i' /> </div>
                            <div className='cItem'>
                                <div className=''> <h3>564.656</h3> </div>
                                <div> <h4>Produtos</h4> </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='cItem-Icon'> <Business className='i' /> </div>
                            <div className='cItem'>
                                <div className=''> <h3>465.46</h3> </div>
                                <div> <h4>Serviços</h4> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dsh-frm'>
                    <div className='dsh'>
                        <div className='table'>
                            <table>
                                <tr>
                                    <td> ID </td>
                                    <td> Nome </td>
                                    <td> Email </td>
                                    <td> Data de Registro</td>
                                    <td> Controles </td>
                                </tr>
                                <tr>
                                    <td> 46546 </td>
                                    <td> Julio Dala </td>
                                    <td> jdulio@gmail.com </td>
                                    <td> 04 / 03 / 2022</td>
                                    <td>
                                        <button> <SelectAll /> </button>
                                        <button> <Delete className='i' /> </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 46546 </td>
                                    <td> Julio Dala </td>
                                    <td> jdulio@gmail.com </td>
                                    <td> 04 / 03 / 2022</td>
                                    <td>
                                        <button> <SelectAll /> </button>
                                        <button> <Delete className='i' /> </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className='Chart'>
                            chart
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}