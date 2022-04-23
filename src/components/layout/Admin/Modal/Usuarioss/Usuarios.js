import react from "react";
import './usuario.css'

import Img from '../../../../../img/client.jpg'

import World from '@mui/icons-material/LocationCity';
import Chat from '@mui/icons-material/Chat';
import Notificacoes from '@mui/icons-material/Notifications';

export default function mUsuario({ closeModal }) {
    return (
        <div className="mUsuario">
            <div className="mContainer">
                <div className="mBody">
                    <div>
                        <div className='img'> <img src={Img} alt="" /> </div>
                        <div className="date">
                            <h1> Carla Madeira </h1>
                            <h4> carla@gmail.com </h4>
                            <h4> 934 345 323 </h4>
                        </div>
                        <div>
                            <h4> Femenino </h4>
                            <World />  <h4> Luanda </h4>
                            <h4> Cacuaco </h4>
                            <h4> Pretinha </h4>
                        </div>
                    </div>
                </div>
                <div className='usrCrtl'>
                    <div>
                    <div>
                        <button>
                            <Chat />
                        </button>
                    </div>
                    <div>
                        <button>
                            <Notificacoes />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}