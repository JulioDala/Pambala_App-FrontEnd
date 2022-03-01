import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import tenis from '../img/tenis.jpg';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SidebarPerfil = () => {
    return (
        <Card elevation={6}
        alignItems="center"
        sx={{ display: 'flex', flexDirection: 'column', textAlign:'center' }}
    >
        <CardContent sx={{ flexGrow: 1 }}>
            <CardMedia
                component="img"
                sx={{

                    height: '250px',
                    width: '250px',
                    borderRadius: "50%"
                }}
                image={tenis}
                alt="random"
            />
            <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1,mt:2, mb:2 }}
            >
                Nome do Usuário 
            </Typography>
            <ListItem button component="a" sx={{ textAlign:'center' }} href="/Perfil">
                <ListItemText primary="Conta" />
            </ListItem>
            <ListItem button component="a" sx={{ textAlign:'center' }} href="/Perfil/Anuncios"> 
                <ListItemText primary="Anúncios" />
            </ListItem>
            <ListItem button component="a" sx={{ textAlign:'center' }} href="/Perfil/Favoritos">
                <ListItemText primary="Favoritos" />
            </ListItem>
            <ListItem button component="a" sx={{ textAlign:'center' }} href="/Perfil/Notificacoes">
                <ListItemText primary="Notificações" />
            </ListItem>
            <ListItem button component="a" sx={{ textAlign:'center' }} href="/">
                <ListItemText primary="Terminar Sessão" />
            </ListItem>
        </CardContent>
    </Card>
    )
}

export default SidebarPerfil
