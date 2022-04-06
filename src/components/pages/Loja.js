import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import tenis from '../../img/g_img5.jpg';

import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';
import Produto from './Produto';
import api from '../services/api';
import Paginacao from '../layout/Paginacao';
;


// import Item from '@mui/material/Item';


const mdTheme = createTheme();

function Loja() {
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

  const [cat, setCat] = useState([]);
  const [idCat, setIdCat] = useState('');
  const [nomeCat, setNomeCat] = useState('');

  useEffect(() => {
    async function loadProdutos() {
      const res = await api.get("user/categorias/listar")
      console.log(res.data);
      setCat(res.data)
      setIdCat(res.data.id)
      setNomeCat(res.data.nome)
    }
    loadProdutos();
  }, []);

  async function filtrar() {
    const res = await api.get("user/2/produto/listar/filtrar")

  }

  //paginação 
  const [itensPorPaginas, setItensPorPaginas] = useState(9);
  const [currentePaginas, setCurrentePaginas] = useState(0);

  const pages = Math.ceil(produto.length / itensPorPaginas)
  const startIndex = currentePaginas * itensPorPaginas;
  const endIndex = startIndex + itensPorPaginas;
  const currentItens = produto.slice(startIndex, endIndex);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      
      <Box sx={{
        backgroundImage: 'Linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(negocios)',
        height: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '4rem'
      }}>
        <Box >
          Nome da Categoria
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, m: 2, mb: 4 }}>
        <Grid container spacing={2} sx={{ flexGrow: 1, mb: 4 }}>
          {/* Lado esquerdo da Tela */}
          <Grid item sx={{}} xs={6} md={3}>

            <Card elevation={3}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography component="h1" variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}
                >
                  Filtrar Busca
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField margin="normal" required fullWidth id="email" label="Nome do Produto" name="email" autoComplete="email" autoFocus
                  />

                  <FormControl sx={{ my: 1, minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Categoria</InputLabel>
                    <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" name='categoriumId' value={idCat} onChange={(e) => setIdCat(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {cat.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl sx={{ my: 1, minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Sub Categoria</InputLabel>
                    <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ my: 1, minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Província</InputLabel>
                    <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ my: 1, minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Município</InputLabel>
                    <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <Typography>
                    preço
                  </Typography>
                  <Grid item spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <TextField sx={{ minWidth: '30%' }} margin="normal" required name="password" label="min" type="tel" id="password" autoComplete="current-password"
                    />
                    <TextField sx={{ minWidth: '30%' }} margin="normal" required name="password" label="max" type="tel" id="password" autoComplete="current-password"
                    />

                  </Grid>


                  <FormControl sx={{ my: 1, minWidth: '100%' }}>
                    <InputLabel id="demo-simple-select-filled-label">Classificação do Vendedor</InputLabel>
                    <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Péssimo</MenuItem>
                      <MenuItem value={20}>mal</MenuItem>
                      <MenuItem value={30}>Bom</MenuItem>
                      <MenuItem value={30}>Muito Bom</MenuItem>
                      <MenuItem value={30}>Excelente</MenuItem>
                    </Select>
                  </FormControl>

                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: '#2980b9' }} onClick={filtrar}>
                    Pesquisar
                  </Button>
                </Box>
              </CardContent>
            </Card>

          </Grid>
          {/* Lado Direito da Tela */}
          <Grid item xs={6} md={9}>
            {/* End hero unit */}
            <Grid container spacing={1}>
              {currentItens.map((produto) => (
                <Produto key={produto.id} caminho={'http://localhost:3003/Images/' + produto.imagem} stars={3} preco={produto.preco} nome={produto.nome} />
              ))}
            </Grid>
          </Grid>

        </Grid>
        {/* paginaçãoo */}
        <Paginacao pages={pages} setCurrentePaginas={setCurrentePaginas} />

      </Box>
      {/* Rodapé */}
      
    </ThemeProvider >

  );
}
export default Loja;
