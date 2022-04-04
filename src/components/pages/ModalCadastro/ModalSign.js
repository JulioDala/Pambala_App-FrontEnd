import react from "react";
import "./modalsign.css";


export default function Sign({ closeModal }) {
    const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

    return (
        <div class="containers">
        {/* <header>Formulário</header>
        <div class="progress-bars">
          <div class="step">
            <p>Nome</p>
            <div class="bullet">
              <span>1</span>
            </div>
            <div class="check fas fa-check"></div>
          </div>
          <div class="step">
            <p>Contato</p>
            <div class="bullet">
              <span>2</span>
            </div>
            <div class="check fas fa-check"></div>
          </div>
          <div class="step">
            <p>Data</p>
            <div class="bullet">
              <span>3</span>
            </div>
            <div class="check fas fa-check"></div>
          </div>
          <div class="step">
            <p>Enviar</p>
            <div class="bullet">
              <span>4</span>
            </div>
            <div class="check fas fa-check"></div>
          </div>
        </div>
        <div class="form-outer">
          <form action="#">
            <div class="page slide-page">
              <div class="title">Informação básica:</div>
              <div class="field">
                <div class="label">Primeiro nome</div>
                <input type="text"/>
              </div>
              <div class="field">
                <div class="label">Sobrenome</div>
                <input type="text"/>
              </div>
              <div class="field">
                <button class="firstNext next">Próximo</button>
              </div>
            </div>
  
            <div class="page">
              <div class="title">Informações de contato</div>
              <div class="field">
                <div class="label">Endereço de e-mail</div>
                <input type="text"/>
              </div>
              <div class="field">
                <div class="label">Número de telefone</div>
                <input type="Number"/>
              </div>
              <div class="field btns">
                <button class="prev-1 prev">Anterior</button>
                <button class="next-1 next">Próximo</button>
              </div>
            </div>
  
            <div class="page">
              <div class="title">Nascimento:</div>
              <div class="field">
                <div class="label">Data</div>
                <input type="text"/>
              </div>
              <div class="field">
                <div class="label">Gênero</div>
                <select>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Outros</option>
                </select>
              </div>
              <div class="field btns">
                <button class="prev-2 prev">Anterior</button>
                <button class="next-2 next">Próximo</button>
              </div>
            </div>
  
            <div class="page">
              <div class="title">Detalhes de login:</div>
              <div class="field">
                <div class="label">Nome do usuário</div>
                <input type="text"/>
              </div>
              <div class="field">
                <div class="label">Senha</div>
                <input type="password"/>
              </div>
              <div class="field btns">
                <button class="prev-3 prev">Anterior</button>
                <button class="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div> */}
      </div>
      
    )
}