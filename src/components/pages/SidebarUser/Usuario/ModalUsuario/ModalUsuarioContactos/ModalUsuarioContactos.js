import react from "react";

export default function ModalUsuarioContactos({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="modalTitle">
                    <h1>Informações de Contactos</h1>
                </div>
                <div className="modalBody">
                    <form>
                        <input type='number' placeholder="Telefone" />
                        <input type='number' placeholder="WhatsApp" />
                        <input type='email' placeholder="E-mail" />
                        
                    </form>

                </div>
                <div className="modalFooter">
                    <button>Atualizar</button>
                    <button onClick={() => closeModal(false)} >Cancelar</button>
                </div>
            </div>

        </div>
    )
}