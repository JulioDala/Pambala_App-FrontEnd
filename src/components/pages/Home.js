import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import { createTheme, ThemeProvider } from '@mui/material/styles';

import watch1 from '../../img/watch1.jpg';
import watch2 from '../../img/watch2.jpg';
import watch3 from '../../img/watch3.jpg';
import watch4 from '../../img/watch4.jpg';

import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';

import './Home.css';
import Recent from './Recent/Recent.js';
import Avaliar from './Frms/Avaliar/Avaliar.js'
import './Loja.css';
import Produto from './Produto';
import api from '../services/api';
import Carousel from '../layout/Carousel';
import { useNavigate } from 'react-router-dom';


const mdTheme = createTheme();

function Home() {
  // estrelas
  const [value, setValue] = React.useState(2);

  //dados do produto
  const [imagem, setImagen] = useState('');
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      const res = await api.get("/user/2/produto/listar")
      console.log(res);
      setId(res.data.id)
      setProduto(res.data)
      setNome(res.data.nome)
      setDescricao(res.data.descricao)
      setPreco(res.data.preco)
      setImagen(res.data.imagem)
    }
    loadProdutos();
  }, []);

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  let navigate = useNavigate()

const [AbrirAvaliar, setFecharAvaliar] = useState(false);
  return (
    <ThemeProvider theme={mdTheme}>
    { AbrirAvaliar && <Avaliar closeModal={setFecharAvaliar} />}
      <Navbar />
      <Carousel />
      <Box sx={{ flexGrow: 1, m: 1, }}>

        <h1 class="heading"> <span> Anúncios recentes </span> </h1>
        {/* End hero unit */}
        

      <Recent/>
         

         <div className="productContainer" >
            {produto.map((produto) => (
              <div className="productCard" >
                <div className="imgBx">
                <h1>NOVO CARD</h1>
                    <img src={watch1}  alt=''/>
                    <img src={watch1}  alt=''/>
                    <ul className="action">
                        <li>
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /></svg></i>
                            <span>favoritos</span>
                        </li>
                        <li onClick={() => { navigate(`/Produto/${produto.id}`) }} > 
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" /><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /></svg></i>
                            <span>Ver detalhes</span>
                        </li>
                    </ul>
                </div>
                <div className="productContent">
                    <div className="productName">
                        <h3>{produto.nome}</h3>
                    </div>
                    <div className="price_rating">
                        <h2>{produto.preco} KZs</h2>
                        <div className="rating">
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></i>
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></i>
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></i>
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></i>
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></i>
                        </div>
                    </div>
                </div>
            </div>
            ))}
          </div>
        
        <h1 className="heading"> <span> Produto em Destaque </span> </h1>
        <section data-aos="fade-left" className="featured" id="featured">
          <div className="rowImage">
            <div className="image-container">
              <div className="big-image">
                <img src={watch1} alt="" />
              </div>
              <div className="small-image">
                <img className="image-active" src={watch1} alt="" />
                <img src={watch2} alt="" />
                <img src={watch3} alt="" />
                <img src={watch4} alt="" />
              </div>
            </div>
            <div className="content">
              <h3>smart watches</h3>
              <div className="stars">
                <Rating name="read-only" value="5" readOnly />
                <span>(500+) Avaliações</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at!</p>
              <strong className="price">10 000 kzs</strong>
              <a href="#"><button className="btn">Ver mais</button></a>
            </div>
          </div>
        </section>

        <section data-aos="fade-right" class="deal" id="deal">
          <h1 class="heading"> <span> Nossos serviços </span> </h1>
          <div class="icons-container">
            <div class="icons">
              <i class="fas fa-shipping-fast"></i>
              <h3>fast delivery</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
            </div>

            <div class="icons">
              <i class="fas fa-user-clock"></i>
              <h3>24 x 7 support</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
            </div>

            <div class="icons">
              <i class="fas fa-money-check-alt"></i>
              <h3>Pagamentos</h3>
              <p>Apartir dos melhores preços, pague os pacotes para promover os seus produtos</p>
            </div>

            <div class="icons">
              <i class="fas fa-box"></i>
              <h3>10 days replacements</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, molestiae?</p>
            </div>

          </div>

        </section>
        <section className="newsletter">

          <h1>Avalie-nos</h1>
          <p>Avalie-nos e ajude-nos a melhorar</p>
          <form action="">
            <input type="email" placeholder="Digite seu email" />
            <input type="button" onClick={() => {setFecharAvaliar(true);}} className="btn" value="Avaliar" />
          </form>

        </section>

      </Box>
      {/* Rodapé */}
      <FooterAdmin sx={{ p: 2 }} />
    </ThemeProvider >

  );
}
export default Home;

