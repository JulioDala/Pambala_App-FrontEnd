import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loja from './pages/Loja';
import Contacto from './pages/Contacto';
import Entrar from './pages/Entrar';
// import Navbar from './layout/Navbar';
import Cadastrar from './pages/Cadastrar';
import SideBarUser from './pages/SidebarUser/SideBarUser';
import Usuario from './pages/SidebarUser/Usuario/Usuario';
import Favorito from './pages/SidebarUser/Favoritos/Favorito';
import Promocao from './pages/SidebarUser/Promocao/Promocao';
import Anunciados from './pages/SidebarUser/Anunciados/Anunciados';
import AnunciarProduto from './pages/AnunciarProduto';
import DescricaoProduto from './pages/DescricaoProduto';
import Notificacoes from './pages/Notificacoes';
import Anuncios from './pages/Anuncios';
import Favoritos from './pages/Favoritos';
import Modal from './pages/Modal';


import Dashboard from './pages/admin/Dashboard';
import Estatisticas from './pages/admin/Estatisticas';
import NotificacoesAdmin from './pages/admin/NotificacoesAdmin';
import Usuarios from './pages/admin/Usuarios';
import CadastrarAdmin from './pages/admin/Usuarios/CadastrarAdmin';
import Listar from './pages/admin/Usuarios/Listar';

import PrivateRoute from './services/WAuth';
import Conta from './pages/Conta';
import Promocoes from './pages/Promocoes';

/* Importações da Conta Do Usuario */
import IndexUser from './layout/User/IndexUser/IndexUser';
import CountUser from './layout/User/CountUser/CountUser';

function Rotas() {
  return (
    <Router>
      <Routes>
        {/* Rotas do usuário */}
        <Route element={<Home />} path="/"/>
        <Route element={<Home />} path="/Casa"/>
        <Route element={<Modal />} path="/Modal"/>
        <Route element={<Loja />} path="/Loja"/>
        <Route element={<Contacto />} path="/Contacto"/>
        <Route element={<Entrar />} path="/Entrar" exact />
        <Route element={<Cadastrar />} path="/Cadastrar"/>
        <Route element={<SideBarUser />} path="/Perfil" />
        <Route element={<Usuario />} path="/Perfil/Usuario" />
        <Route element={<Favorito />} path="/Perfil/Favorito" />
        <Route element={<Promocao />} path="/Perfil/Promocao" />
        <Route element={<Anunciados />} path="/Perfil/Anunciados" />
        <Route element={<Promocoes />} path="/Perfil/Promocoes" />
        <Route element={<Conta />} path="/Conta" />
        <Route element={<Notificacoes />} path="/Perfil/Notificacoes"/>
        <Route element={<Anuncios />} path="/Perfil/Anuncios"/>
        <Route element={<Favoritos />} path="/Perfil/Favoritos" />
        <Route element={<AnunciarProduto /> } path="/Anunciar%20Produto"  />
        <Route element={<DescricaoProduto />} path="/Produto/:ident" exact />

        {/* Rotas da Conta Do Usuario */}
        <Route element={<IndexUser />} path="/index/usuario" exact />
        <Route element={<CountUser />} path="/index/usuario/Conta" exact />

        {/* Rotas do admin */}
        <Route element={<Dashboard />} path="/admin" exact />
        <Route element={<Usuarios />} path="/admin/usuarios" exact />
        <Route element={<NotificacoesAdmin />} path="/admin/notificacoes" exact />
        <Route element={<Estatisticas />} path="/admin/estatisticas" exact />
        <Route element={<CadastrarAdmin />} path="/admin/usuarios/cadastrar" exact />
        <Route element={<Listar />} path="/admin/usuarios/listar" exact />
      </Routes>
    </Router>
  );
}
export default Rotas;