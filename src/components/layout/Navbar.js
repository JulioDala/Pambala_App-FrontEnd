import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Comment';
import SearchIcon from '@mui/icons-material/Search';
import JAD from '../../img/JAD.jpeg';
import Logo from '../../logo2.png';
import Logotipo from "../../logo.png"

import Login from '../pages/Login/Login';
import Cadastro from '../pages/Frms/Cadastrar/CadastrarU';
import {useState} from 'react';

const pages = ['Casa', 'Loja', 'contacto', 'Entrar', 'Anunciar Produto'];

const settings = ['Perfil', 'Sair'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [AbrirLogin, setFecharLogin] = useState(false);
  const [AbrirCadastro, setFecharCadastro] = useState(false);
  return (

    <header>
      { AbrirLogin && <Login closeModal={setFecharLogin} />}
      { AbrirCadastro && <Cadastro closeModal={setFecharCadastro} />}
      <div class="header-1">
        <a href="/" class="logo"> <img src={Logotipo} className="logo-logo" alt='' /> </a>
        <div class="form-container">
          <div className='container-form-container'>
            <form action="">
              <input type="search" placeholder="Pesquisar produtos" id="search" />
              <label for="search"> <SearchIcon className='Icon-Search' /></label>
            </form>
          </div>
        </div>
      </div>
      
      <div className="header-2">       
          <nav className="navBar">          
            <ul>
              <li> <Link to="/">Início</Link> </li>
              <li><Link to="/Loja">Produtos</Link></li>
              <li><Link to="#" onClick={() => {setFecharCadastro(true);}}>Cadastrar</Link></li>
              <li>  {localStorage.getItem('&app-token') ? <Link to="/">Sair</Link> : <Link to="#" onClick={() => {setFecharLogin(true);}}>Entrar</Link>}  </li>
            </ul>
          </nav>
      </div>
      
    </header>
  )
};
export default ResponsiveAppBar;