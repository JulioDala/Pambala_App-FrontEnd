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

  return (

    <header>

      <div class="header-1">

        <a href="#" class="logo"> <i class="fas fa-shopping-bag"></i>  Pambala </a>

        <div class="form-container">

          <div className='container-form-container'>
            <form action="">
              <input type="search" placeholder="Pesquisar produtos..." id="search" />
              <label for="search"> <SearchIcon className='Icon-Search' /></label>

            </form>
          </div>

        </div>

      </div>

      <div class="header-2">

        <div id="menu" class="fas fa-bars"></div>

        <nav class="navbar">
          <ul>
            <li> <Link to="/">Início</Link> </li>
            <li><Link to="/Loja">Produtos</Link></li>
            <li><Link to="/Anunciar%20Produto"> Anunciar</Link></li>
            <li><Link to="/Perfil/Usuario"> Conta</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>

            <li>  {localStorage.getItem('&app-token') ? <Link to="/">Sair</Link> : <Link to="/Entrar">Entrar</Link>}  </li>

          </ul>
        </nav>

        <div class="icons">
          <FavoriteIcon className='icons-icons' />
          <NotificationsIcon className='icons-icons'  />
          <ChatIcon className='icons-icons'  />
          <Tooltip title="Open settings">
            <IconButton  sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={JAD} sx={{ width: 50, height: 50, border: 2 }} />
            </IconButton>
          </Tooltip>
        </div>

      </div>

    </header>

  )

};
export default ResponsiveAppBar;