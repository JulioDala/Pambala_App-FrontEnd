import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import api from '../services/api';
import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';

const mdTheme = createTheme();

function Loja() {

    const [file, setFile] = useState();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [categoria, setCategoria] = useState(0);
    const [subcategoria, setSubcategoria] = useState(0);
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    const [cat, setCat] = useState([]);
    const [idCat, setIdCat] = useState('');
    const [nomeCat, setNomeCat] = useState('');
    const [subCat, setSubCat] = useState([]);
    const [idSubCat, setIdSubCat] = useState('');
    const [nomeSubCat, setNomeSubCat] = useState('');

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        formData.append("nome", nome);
        formData.append("descricao", descricao);
        formData.append("preco", preco);
        formData.append("categoriumId", categoria);
        formData.append("subCategoriumId", subcategoria);

        const headers = {
            'headers': {
                'content-type': 'application/json'
            }
        }
        try {
            const res = await api.post('/user/2/produto/cadastrar', formData, headers);
            console.log(res);
            setNome(res.data.nome)
            setDescricao(res.data.descricao)
            setCategoria(res.data.categorium.id)
            setSubcategoria(res.data.subCategorium.id)
            setPreco(res.data.preco)
            setFile(res.data.imagem)
            setStatus({
                type: 'sucess',
                mensagem: res.data.mensagem
            })
            if (res.status === 200){
                window.location.href = '/'
            }
        } catch (ex) {
            console.log(ex);
            if (ex.res) {
                setStatus({
                    type: 'error',
                    mensagem: ex.res.data.mensagem
                })
            } else {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro! Houve um problema no servidor. Tente mais tarde'
                })
                window.location.href = '/'
            }
        }
    };
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


    return (
        <ThemeProvider theme={mdTheme}>
            <Navbar />
            <Box sx={{ flexGrow: 1, mx: '25%', mb: 4, mt: 4 }}>
                {status.type === 'sucess' ? <Alert severity="success" sx={{ mb: 4 }}> {status.mensagem}</Alert> : ''}
                {status.type === 'error' ? <Alert severity="error" sx={{ mb: 4 }}> {status.mensagem}</Alert> : ''}
                <Paper elevation={3} sx={{ p: 4, width: '600px' }}>
                    <Grid container spacing={2} sx={{ flexGrow: 1, mb: 2 }}>
                        {/* Lado esquerdo da Tela */}
                        <Grid item sx={{ m: 'auto' }} xs={12} md={12}>
                            <Typography gutterBottom variant="h4" component="div" position="rigth" sx={{ textAlign: 'center' }}>
                                Anunciar Produto
                            </Typography>
                            <Typography sx={{ textAlign: '' }}>
                                Dados de Produto
                            </Typography>
                            <form action="" encType="multipart/form-data">
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="titulo"
                                label="titulo "
                                name="nome"
                                autoComplete="titulo"
                                autoFocus
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <Grid item xs={12} sm={6} md={12} sx={{
                                display: 'flex',
                                justifyContent: '',
                                mt: 2, mb: 2
                            }}>
                                <Grid item sm={6} md={6} sx={{
                                    mr: 1,
                                }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="municipio">Categoria</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                            name='categoriumId'
                                            value={categoria}
                                            onChange={(e) => setCategoria(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {cat.map((item) =>(
                                                <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                                            ) )}   
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="municipio">Sub-Categoria</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                            name='subCategoriumId'
                                            value={subcategoria}
                                            onChange={(e) => setSubcategoria(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                                <MenuItem value='1'>computador</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={6}
                                placeholder="Descrição do Produto"
                                autoFocus
                                style={{ width: '100%' }}
                                name='descricao'
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />

                            <Grid item sm={6} md={6} sx={{
                            }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="preco"
                                    label="Preço "
                                    name="preco"
                                    autoComplete="preco"
                                    type="tel"
                                    autoFocus
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                />
                            </Grid>
                            <Typography sx={{ textAlign: '' }}>
                                Imagens
                            </Typography>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="image"
                                type="file"
                                fullWidth
                                variant="standard"
                                onChange={saveFile}
                            />

                            {file ? <img src={URL.createObjectURL(file)} width="150" height="150" /> : ''}
                            <Typography sx={{ textAlign: '', mt: 2 }}>
                                Dados de contacto
                            </Typography>
                            <Grid item xs={12} sm={6} md={12} sx={{
                                display: 'flex',
                                justifyContent: '',
                                mt: 2
                            }}>
                                <Grid item sm={6} md={6} sx={{
                                    mr: 1,
                                }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="municipio">Província</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Talatona</MenuItem>
                                            <MenuItem value={2}>mal</MenuItem>
                                            <MenuItem value={3}>Bom</MenuItem>
                                            <MenuItem value={4}>Muito Bom</MenuItem>
                                            <MenuItem value={5}>Excelente</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={6} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="municipio">Munícípio</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Talatona</MenuItem>
                                            <MenuItem value={2}>mal</MenuItem>
                                            <MenuItem value={3}>Bom</MenuItem>
                                            <MenuItem value={4}>Muito Bom</MenuItem>
                                            <MenuItem value={5}>Excelente</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="telefone"
                                label="Telefone "
                                name="telefone"
                                autoComplete="telefone"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email "
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Stack direction="row-reverse" spacing={2}>
                                <Button sx={{ mt: 2,bgcolor: ' #2980b9' }} variant="contained" onClick={uploadFile}>
                                    Publicar Anúncio
                                </Button>
                            </Stack>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Box >
            {/* Rodapé */}
            < FooterAdmin sx={{ p: 2 }
            } />
        </ThemeProvider >

    );
}
export default Loja;
