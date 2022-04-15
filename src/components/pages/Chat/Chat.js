import React from 'react';
import './chat.css';

import imagem from '../../../img/frm/perfil.png';

import Camera from '@mui/icons-material/CameraAlt'
import Send from '@mui/icons-material/Send'
import Gallery from '@mui/icons-material/Photo'
import Phone from '@mui/icons-material/Phone'
import Settings from '@mui/icons-material/Settings'
import Microphone from '@mui/icons-material/Mic'
import Video from '@mui/icons-material/VideoCall'
import ChatQ from '@mui/icons-material/Chat'
import Close from '@mui/icons-material/Close'
import Max from '@mui/icons-material/MaximizeRounded'
import Min from '@mui/icons-material/MinimizeRounded'
import Menu from '@mui/icons-material/Menu'

export default function Chat() {
    return (
        <>
            <div className='Chat'>
                <div className='cChat'>
                    <div className='ChatMenu'>
                        <div className='chtChat'>
                            <div>
                                <ChatQ className='i' />
                            </div>
                            <div>
                                <span>Chat</span>
                            </div>
                        </div>
                        <div className='btnChat'>
                            <button> <Min /> </button>
                            <button> <Max /> </button>
                            <button> <Close /> </button>
                        </div>
                    </div>
                    <div className='bChat'>
                        <div className='ChatUsuarios'>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Carlos Manuel Quintas</h4>
                                        </div>
                                        <div>
                                            <h6>Um pouco da mensagem...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='chtSpan'>
                                    <span>
                                        2
                                    </span>
                                </div>
                            </div>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Manuela Simão</h4>
                                        </div>
                                        <div>
                                            <h6>Bom dia amor, estou...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='chtSpan'>
                                    <span>
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Mendes Pedro</h4>
                                        </div>
                                        <div>
                                            <h6>Tenho um salo...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <span>
                                    </span>
                                </div>
                            </div>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Rosa Neto</h4>
                                        </div>
                                        <div>
                                            <h6>Um pouco da mensagem...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <span>
                                    </span>
                                </div>
                            </div>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Veronica Fumento</h4>
                                        </div>
                                        <div>
                                            <h6>Eu te odeio...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <span>
                                    </span>
                                </div>
                            </div>
                            <div className='chtUsuario'>
                                <div className='chtUser'>
                                    <div className='chtcPhoto'>
                                        <img src={imagem} alt='Foto' />
                                    </div>
                                    <div className='chtDateUser'>
                                        <div>
                                            <h4>Silva Antonio</h4>
                                        </div>
                                        <div>
                                            <h6>Um pouco da mensagem...</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='chtSpan'>
                                    <span>
                                        7
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className='ChatMensagens'>
                            <div className='mmConteudo'>
                                <div className='mmUser'>
                                    <div className='cMenu'>
                                        <Menu className='i' /></div>
                                    <div className='mmUserImg'>
                                        <img src={imagem} alt='Foto de Perfil' />
                                    </div>
                                    <div className='mmUserTitle'>
                                        <h3> Marcos Dinza </h3>
                                    </div>
                                </div>
                                <div className='mmOption'>
                                    <div>
                                        <Phone className='i' />
                                        <Microphone className='i' />
                                        <Video className='i' />
                                        <Settings className='i' />
                                    </div>
                                </div>
                            </div>
                            <div className='cmConteudo'>
                                <div>
                                    <div className='Chat-Enviado'>
                                        <span> Bom dia Cliente! </span>
                                    </div>
                                    <div className='Chat-Recebido'>
                                        <span> Bom dia Vendedor! </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='Chat-Enviado'>
                                        <span> Tudo bem?! </span>
                                    </div>
                                    <div className='Chat-Recebido'>
                                        <span> Nas calmas e você?! </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='Chat-Enviado'>
                                        <span> Também estou bue fixe! </span>
                                    </div>
                                    <div className='Chat-Recebido'>
                                        <span> Novidades sobre aquele mambo?! </span>
                                    </div>
                                </div>

                            </div>
                            <div className='lmConteudo'>
                                <form>
                                    <div className='cbChat'>
                                        <Camera className='i' />
                                        <Gallery className='i' />
                                    </div>
                                    <textarea placeholder=' Escreva a sua mensagem...'></textarea>
                                    <button> <Send className='iChat i' /> <span>Enviar</span> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}