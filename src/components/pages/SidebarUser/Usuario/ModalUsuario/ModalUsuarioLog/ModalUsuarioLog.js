import react from "react";

export default function ModalUsuarioLog({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalTitle">
                    <h1>Terminar Sessão</h1>
                </div>
                <div className="modalBody">
                <h4> Deseja terminar Sessão?</h4>
                </div>
                <div className="modalFooter">
                    <button>yes</button>

                </div>
            </div>

        </div>
    )
}