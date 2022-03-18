

import react from "react";

export default function ModalUsuarioQualificacoes({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalTitle">
                    <h1>Adicionar Qualificação</h1>
                </div>
                <div className="modalBody">
                    <form>
                        <input type='text' placeholder="Area de Serviço" />
                        <input type='text' placeholder="Categoria" />
                        <input type='text' placeholder="Sub-categoria" />
                        <input type='number' placeholder="Anos de experiencia" />
                        <input type='number' placeholder="Nivel" />
                        <input type='text' placeholder="Licenciatura" />
                        <input type='date' placeholder="Registro" />
                        
                    </form>

                </div>
                <div className="modalFooter">
                    <button>Atualizar</button>
                    
                </div>
            </div>

        </div>
    )
}