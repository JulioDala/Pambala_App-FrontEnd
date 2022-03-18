import react from "react";
import "./modalusuarioinfo.css";

export default function ModalUsuarioInfo({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalTitle">
                    <h1>Informações Pessoais</h1>
                </div>
                <div className="modalBody">
                    <form>
                        <input type='text' placeholder="Nome pessoal" />
                        <input type='date' placeholder="Nascimento" />
                        <input type='text' placeholder="Sexo" />
                        <input type='text' placeholder="País" />
                        <input type='text' placeholder="Provincia" />
                        <input type='text' placeholder="Municipio" />
                        <input type='text' placeholder="Bairro" />
                        
                    </form>

                </div>
                <div className="modalFooter">
                    <button>Atualizar</button>
                  
                </div>
            </div>

        </div>
    )
}