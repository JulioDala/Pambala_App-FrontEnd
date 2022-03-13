import * as React from 'react';
import {Link} from 'react-router-dom';
import'./Navbar.css';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
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
          <form action="">
            <input type="search" placeholder="Pesquisar produtos..." id="search" />
            <label for="search"> <SearchIcon/></label>
          </form>
        </div>

      </div>

      <div class="header-2">

        <div id="menu" class="fas fa-bars"></div>

        <nav class="navbar">
          <ul>
            <li> <Link to="/">Início</Link> </li>
            <li><Link to="/Loja">Produtos</Link></li>
            <li><Link to="/Anunciar%20Produto"> Criar Anuncio</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          
            <li>  {localStorage.getItem('&app-token') ? <Link to="/">Sair</Link> : <Link to="/Entrar">Entrar</Link>}  </li>
           
          </ul>
        </nav>

        <div class="icons">
            <FavoriteIcon sx={{ width: 22, height: 22,ml:0.5,borderRadius: '50%',lineHeight:20 }}/>
            <NotificationsIcon sx={{ width: 22, height: 22,ml:0.5,borderRadius: '50%' }}/>
            <ChatIcon sx={{ width: 22, height: 22,ml:0.5,borderRadius: '50%' }}/>
          <Tooltip title="Perfil">
            <IconButton sx={{ p: 0 }}>
              <Link to="/Perfil"><Avatar alt="Remy Sharp"  src={JAD}  sx={{ width: 23, height: 23,ml:0.5 }}/></Link>
            </IconButton>
          </Tooltip>
        </div>

      </div>

    </header>

  )

};
export default ResponsiveAppBar;