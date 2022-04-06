import React from "react"
import "./publishProduct.css";

import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";

export default function PublishProduct() {
    return (
        <>
            <div className='Container-content'>
                <div>
                    <HeaderNavBar />
                </div>
                <div className='cc'>
                    <div className='cc-B'>
                        <div className="frmPublish">
                            <form>
                                <input type="text" placeholder="Titulo"  required  />
                                <select  required >
                                    <option>Categoria</option>
                                </select>
                                <select  required >
                                    <option>Subcategoria</option>
                                </select>
                                <textarea placeholder="Descrição"></textarea>
                                <input type="number" placeholder="Preço" required />
                                <input type="file" src="" placeholder="Imagem" required />
                                <button>Anunciar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}