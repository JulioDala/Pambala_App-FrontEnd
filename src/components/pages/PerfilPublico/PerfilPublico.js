import React from 'react'
import './perfilPublico.css'

import PublicPhoto from '../../../img/client.jpg';

import Telephone from '@mui/icons-material/Phone';
import WhatsApp from '@mui/icons-material/WhatsApp';
import DateBorn from '@mui/icons-material/DateRange';
import LocationNate from '@mui/icons-material/LocationCity';
import Global from '@mui/icons-material/LocationOn';
import Local from '@mui/icons-material/LocationSearching';
import Chat from '@mui/icons-material/Chat';
import HeaderNavBar from '../../layout/User/HeaderNavBar/HeaderNavBar';
import Navbar from '../../layout/Navbar';

export default function PerfilPublico() {
    return (
        <div className=''>
            <Navbar/>
            <div className='PerfilPublico'>
                <div className='PublicPhoto'>
                    <img src={PublicPhoto} alt="Foto de Perfil" />
                </div>
                <div className='PublicData'>
                    <div className='PublicName'>
                        <span className=''> Carolina Katter Wins </span>
                    </div>
                    <div className='PublicContact'>
                        <Telephone /> <span> 923 456 998 </span>
                        <WhatsApp /> <span> 922 134 786 </span>
                        <DateBorn /> <span> 20 de Outubro de 2022 </span>
                    </div>
                    <div className='PublicLC'>
                        <div className='PublicLocation'>
                            <span><Global className='PublicIcon' />Província</span>
                            <span><LocationNate className='PublicIcon' />Cidade</span>
                            <span><Local className='PublicIcon' />Bairro</span>
                        </div>
                        <div className="PublicChat">
                            <button> <Chat className='IconPublicChat' /> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}