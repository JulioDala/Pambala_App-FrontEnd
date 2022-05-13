import react from "react";
import "./contact.css"
export default function ModalUsuarioContactos({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="CmodalContainer">
                <div className="modalBody">
                    <form className="frm">
                        <input type='number' placeholder="Telefone" />
                        <input type='number' placeholder="WhatsApp" />
                        <input type='email' placeholder="E-mail" />                        
                    </form>
                </div>
                <div className="modalFooter">
                    <button>Atualizar</button>
                </div>
            </div>

        </div>
    )
}