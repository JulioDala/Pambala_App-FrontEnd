import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import FooterAdmin from '../FooterAdmin';
import Navbar from '../layout/Navbar';
import api from '../services/api';

const theme = createTheme();

const Cadastrar = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [provincia, setProvincia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [bi, setBi] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit() {
        const data = {
            nome: nome,
            email: email,
            telefone: telefone,
            provincia: provincia,
            municipio: municipio,
            bi: bi,
            senha: senha
        }

        console.log(data)
        const response = await api.post('/user/cadastrar', data);

        if (response.status === 200) {
            window.location.href = '/admin/usuarios'
        } else {
            alert('Erro ao cadastrar o usuário')
        }

    };

    return (
        <ThemeProvider theme={theme}>
            {/* Cabeçalho */}
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper elevation={6} sx={{ p: 4 }}>
                        <Typography component="h1" variant="h5">
                            Cadastre-se  Aqui
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                id="nome"
                                label="Nome "
                                name="nome"
                                autoComplete="nome"
                                autoFocus
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                id="email"
                                label="Email "
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                id="telefone"
                                label="Telefone "
                                name="telefone"
                                autoComplete="telefone"
                                autoFocus
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />

                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="provincia">Província</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={provincia}
                                    onChange={e => setProvincia(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Luanda</MenuItem>
                                    <MenuItem value={2}>Bengo</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="municipio">Munícípio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={municipio}
                                    onChange={e => setMunicipio(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Talatona</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                id="bi"
                                label="BI "
                                name="bi"
                                autoComplete="bi"
                                autoFocus
                                value={bi}
                                onChange={e => setBi(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="senha"
                                autoComplete="current-password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                variant="filled"
                                fullWidth
                                name="password"
                                label="Confirmar Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Box>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2,bgcolor: '#2980b9' }}
                        >
                            Cadastrar
                        </Button>
                    </Paper>
                </Box>
            </Container>
            {/* Rodapé */}
            <FooterAdmin sx={{ p: 2,mt:2 }} />
        </ThemeProvider>
    )
}

export default Cadastrar
