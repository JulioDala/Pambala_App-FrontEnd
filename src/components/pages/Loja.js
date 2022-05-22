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

import Recent from './Recent/Recent.js';

import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';
import Produto from './Produto';
import api from '../services/api';
import Paginacao from '../layout/Paginacao';


import img from '../../img/watch4.jpg'



import Person from '@mui/icons-material/Person';
import Money from '@mui/icons-material/Money';
import Favorite from '@mui/icons-material/Favorite';
import Tv from '@mui/icons-material/Tv';


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


const vetor = [{nome:"Júlio Dala"},{nome:"João Dala"},{nome:"Josué Rufino"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"},{nome:"Júlio Dala"}]

  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar />     
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

               <div className='CardProduts'  data-aos="fade-left" >
        <div className='Card'>
          {vetor.map(({nome})=>(
            <div className='item'>
            <div className='img'>
              <img src={img} alt='' />
            </div>
            <div className='details'>
              <h2>Relógio Ultra  <button><Favorite/></button> </h2> 
              <h5>Produto</h5>
              <h5>3 meses atras</h5>
              <h5><Person/> {nome}</h5>
              <h5><Money/> 15.000.00 kz</h5>

              <Rating className='rate rt' />
                  </div>
          </div>
            ))}
        </div>
      </div>
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
