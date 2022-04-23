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

import PerfilPublico from './pages/PerfilPublico/PerfilPublico';
import IndexAPS from './pages/Frms/AnunciarPSs/indexAPS.js';
import Chat from './pages/Chat/Chat';
import CadastrarU from './pages/Frms/Cadastrar/CadastrarU.js';
import Shop from "./layout/User/Shop/Shop";
import SideBar from './pages/SidebarUser/SideBarUser';
import Seguranca from './pages/Seguranca/IndexSeguranca/IndexSeguranca';

/* Importações da Conta Do Usuario */
import IndexUser from './layout/User/IndexUser/IndexUser';
import CountUser from './layout/User/CountUser/CountUser';
import Liked from './layout/User/Liked/Liked';
import Notifications from './layout/User/Notifications/Notifications';
import Shield from './layout/User/Shield/Shield';
import Publish from './layout/User/Publish/Publish';

import PublishProduct from './layout/User/PublishProduct/PublishProduct';

import Adm from './layout/Admin/Admin';
import PUsuarios from './layout/Admin/Usuarios/Usuarios';
import PNotificacoes from './layout/Admin/Notificacoes/Notificacoes';

import PDenuncias from './layout/Admin/Denuncias/Denuncias';
import PProduto from './layout/Admin/Categorias/Produto';
import PServicos from './layout/Admin/Servicos/Servicos';
import PDefinicoes from './layout/Admin/Definicoes/Definicoes';
import PageConteudo from './layout/Admin/Notificacoes/Conteudo/Conteudo';

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

        {/* ROTAS PUBLICAS*/}
        <Route element={<PerfilPublico />} path="/Usuario/index" exact />
        <Route element={<Shop />} path="/index/Usuario/Loja" exact />
        <Route element={<Seguranca />} path="/Seguranca" exact />
        <Route element={<IndexAPS />} path="/indexPSP" exact />
        <Route element={<Chat />} path="/Chat" exact />
        <Route element={<CadastrarU />} path="/CadastrarU" exact />
        <Route element={<SideBar />} path="/SideBar" exact />

        {/* Rotas da Conta Do Usuario */}
        <Route element={<IndexUser />} path="/index/usuario" exact />
        <Route element={<CountUser />} path="/index/usuario/Conta" exact />
        <Route element={<Liked />} path="/index/usuario/Gostos" exact />
        <Route element={<Notifications />} path="/index/usuario/Notificacao" exact />
        <Route element={<Shield />} path="/index/usuario/Promovidos" exact />
        <Route element={<Publish />} path="/index/usuario/Anunciados" exact />

        <Route element={<PublishProduct/>} path="/index/usuario/Anunciar" exact />

        {/* Rotas do admin */}
        <Route element={<Adm />} path="/adm" exact />
        <Route element={<PUsuarios />} path="/adm/Usuarios" exact />
        <Route element={<PNotificacoes />} path="/adm/Notificacoes" exact />
        <Route element={<PageConteudo />} path="/adm/Notificacoes/Conteudo" exact />
        <Route element={<PDenuncias />} path="/adm/Denuncias" exact />
        <Route element={<PProduto />} path="/adm/Categorias" exact />
        <Route element={<PServicos />} path="/adm/Servicos" exact />
        <Route element={<PDefinicoes />} path="/adm/Definicoes" exact />

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