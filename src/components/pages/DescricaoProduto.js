import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import JAD from '../../img/JAD.jpeg';

import FooterAdmin from '../FooterAdmin';
import api from '../services/api';
import Navbar from '../layout/Navbar';
import './DescricaoProduto.css'
import { useParams, Link } from 'react-router-dom';


const mdTheme = createTheme();

//Função que define um painel de tabsBar
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

//Fim da função anterior


//Início da função principal
const DescricaoProduto = () => {
    // estrelas
    const [value, setValue] = React.useState(2);
    // abas
    const [valor, setValor] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValor(newValue);
    };

    //imagem dos produtos relacionados
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    //Quantidade de cardes a se usar na função map
    const cards = [1, 2, 3, 4, 5];
    // estrelas
    const [valueEstrelas, setValueEstrelas] = useState(2);
    const [estrelas, setEstrelas] = useState(0);

    //dados dos produtos
    const [imagem, setImagen] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [produto, setProduto] = useState([]);

    //dados do produto
    const [imagemP, setImagemP] = useState('');
    const [idP, setIdP] = useState('');
    const [nomeP, setNomeP] = useState('');
    const [descricaoP, setDescricaoP] = useState('');
    const [dataP, setDataP] = useState('');
    const [precoP, setPrecoP] = useState(0);
    const [produtoP, setProdutoP] = useState([]);
    const [avaliacoesP, setAvaliacoesP] = useState([]);

    const [desc, setDesc] = useState('');

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
        async function listProduto() {
            const res = await api.get(`/user/2/produto/listar/${ident}`)
            console.log(res);
            setIdP(res.data.id)
            setProdutoP(res.data)
            setNomeP(res.data.nome)
            setDescricaoP(res.data.descricao)
            setPrecoP(res.data.preco)
            setImagemP(res.data.imagem)
            setAvaliacoesP(res.data.avaliacao_usuarios)
            setDataP(res.data.createdAt)
        }
        listProduto();
    }, []);

    let navigate = useNavigate()

    async function handleSubmit() {
        const data = {
            estrela: estrelas,
            descricao: desc
        }
        console.log(data)
        const response = await api.post(`/user/:2/produto/${ident}/avaliar`, data);

    };

    const [itensPorPaginas, setItensPorPaginas] = useState(4);
    const [currentePaginas, setCurrentePaginas] = useState(0);

    const pages = Math.ceil(produto.length / itensPorPaginas)
    const startIndex = currentePaginas * itensPorPaginas;
    const endIndex = startIndex + itensPorPaginas;
    const currentItens = produto.slice(startIndex, endIndex);

    let { ident } = useParams()
    return (
        <ThemeProvider theme={mdTheme}>
            {/* Cabeçalho */}
            <Navbar />
            <Box sx={{ flexGrow: 1, padding: '0 5px 31px', margin: '20px 80px' }}>
                <Grid container spacing={9}>
                    {/* Lado esquerdo da Tela */}
                    <Grid item xs={6} md={8}>
                        <section className="feature" id="featured">
                            <div className="row">
                                <div className="image-container">
                                    <div className="big-image">
                                        <img src={'http://localhost:3003/Images/' + imagemP} alt="" />
                                    </div>
                                    <div className="small-image">
                                        <img className="image-active" src={'http://localhost:3003/Images/' + imagemP} alt="" />
                                        <img src={'http://localhost:3003/Images/' + imagemP} alt="" />
                                        <img src={'http://localhost:3003/Images/' + imagemP} alt="" />
                                        <img src={'http://localhost:3003/Images/' + imagemP} alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* abas */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
                            <Tabs value={valor} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Descrição" {...a11yProps(0)} />
                                <Tab label="Comentários" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={valor} index={0}>
                            <Typography
                                component="h2"
                                variant="h4"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Descrição
                            </Typography>

                            <Typography>
                                {descricaoP}
                            </Typography>
                        </TabPanel>
                        <TabPanel value={valor} index={1}>
                            <br />
                            {avaliacoesP.length > 0 ? (
                                avaliacoesP.map(avaliacao => {
                                    return <div style={{display: 'flex'}} key={avaliacao.id}>
                                        <Avatar alt="Remy Sharp" src={JAD} sx={{ width: 24, height: 24,mr:1 }} />
                                        <div>
                                            <h5> {localStorage.getItem('&nome-usuario')}</h5>
                                            <Rating name="estrela" value={avaliacao.estrela} readOnly />
                                            <br />{avaliacao.descricao}
                                        </div>
                                    </div>
                                })
                            ) : (<p>Não existem avaliações para este produto</p>)}

                            <Typography
                                component="h2"
                                variant="h4"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Adicionar Comentário
                            </Typography>
                            <Rating name="simple-controlled" value={estrelas} onChange={e => setEstrelas(e.target.value)} />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={6}
                                name="descricao"
                                value={desc}
                                placeholder="Corpo da Mensagem"
                                style={{ width: '100%' }}
                                onChange={e => setDesc(e.target.value)}
                            />
                            <Stack direction="row-reverse" spacing={2}>
                                <Button sx={{ mt: 3, bgcolor: '#2980b9' }} onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                                    Enviar
                                </Button>
                            </Stack>
                        </TabPanel>
                    </Grid>

                    {/* Lado Direito da Tela */}
                    <Grid item xs={6} md={4} sx={{}} >
                        <Card elevation={6}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h4" component="h2">
                                    {nomeP}
                                </Typography>
                                <Typography>
                                    {dataP}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h1" sx={{ color: '#ff3300' }}>
                                    {precoP} Kzs
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card elevation={6}
                            sx={{ display: 'flex', flexDirection: 'column', mt: 1, alignItems: 'center', textAlign: 'center' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h1" sx={{ m: 'auto' }}>
                                    Informações do pambaleiro
                                </Typography>
                                <CardMedia
                                    component="img"
                                    sx={{

                                        height: '70px',
                                        width: '70px',
                                        borderRadius: "50%",
                                        m: 'auto'
                                    }}
                                    image={JAD}
                                    alt="random"
                                />
                                <Typography sx={{ m: 'auto' }}>
                                    Contactos: +244 ### ### ###
                                </Typography>
                                <Typography sx={{ m: 'auto' }}>
                                    Localização: Província, Município
                                </Typography>
                                <Typography>
                                    Classificação: <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Typography>
                                <Button sx={{ mt: '3', bgcolor: '#2980b9' }} variant="contained" onClick='' >
                                    <Link to='/Usuario/index'> Ver Perfil </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card elevation={6}
                            sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h4" component="h1">
                                    Produtos Relacionados
                                </Typography>

                                {currentItens.map((produto) => (
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                                <Img alt="complex" src={'http://localhost:3003/Images/' + produto.imagem} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" component="div" variant="h5" component="h1">
                                                        {produto.nome}
                                                    </Typography>

                                                    <Typography variant="body2" color="text.secondary">
                                                        <Rating name="simple-controlled" value={valueEstrelas} onChange={(event, newValue) => {
                                                            setValueEstrelas(newValue);
                                                        }}
                                                        />
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" component="div" variant="h5" component="h2" sx={{ color: '#ff3300' }}>
                                                    {produto.preco} Kzs
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}

                                <a href="#">Ver mais</a>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </Box>
            {/* Rodapé */}
            <FooterAdmin sx={{ mt: 1, p: 2 }} />
        </ThemeProvider >
    )
}

export default DescricaoProduto
