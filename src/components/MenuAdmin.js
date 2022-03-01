import * as React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExitToApp from '@mui/icons-material/ExitToApp';
import api from './services/api';
import { getToken, logout } from './services/auth';


// Lista do SidBar
export const mainListItems = (
    <div>
        <Link to="/admin">
            <ListItem button component="a" href="" sx={{
                '&:focus': {
                    p: '7px',
                    bgcolor: '#243238',
                    borderRadius: '3px',
                    color: '#fff '
                }
            }}>

                <ListItemIcon>
                    <Tooltip title="Dashboard">
                        <DashboardIcon />
                    </Tooltip >
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>

        <Link to="/admin/estatisticas">
            <ListItem button component="a" href="" sx={{
                '&:focus': {
                    p: '7px',
                    bgcolor: '#243238',
                    borderRadius: '3px',
                    color: '#fff '
                }
            }}>
                <ListItemIcon>
                    <Tooltip title="Estatísticas">
                        <BarChartIcon />
                    </Tooltip >
                </ListItemIcon>
                <ListItemText primary="Estatísticas" />
            </ListItem>
        </Link>

        <Link to="/admin/usuarios">
            <ListItem button component="a" href="" sx={{
                '&:focus': {
                    p: '7px',
                    bgcolor: '#243238',
                    borderRadius: '3px',
                    color: '#fff '
                }
            }}>
                <ListItemIcon>
                    <Tooltip title="Usuários">
                        <PeopleIcon />
                    </Tooltip >
                </ListItemIcon>

                <ListItemText primary="Usuários" />
            </ListItem >
        </Link>

        <Link to="/admin/notificacoes">
            <ListItem button component="a" href="" sx={{
                '&:focus': {
                    p: '7px',
                    bgcolor: '#243238',
                    borderRadius: '3px',
                    color: '#fff '
                }
            }}>
                <ListItemIcon>
                    <Tooltip title="Notificações">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </Tooltip >
                </ListItemIcon>

                <ListItemText primary="Notificações" />
            </ListItem >
        </Link>
    </div >
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Opções</ListSubheader>
        <ListItem button onClick={sair}>
            <ListItemIcon>
                <Tooltip title="Sair">
                    <ExitToApp />
                </Tooltip >
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItem>
    </div>
);

async function sair() {
    if (window.confirm('Deseja realmente sair do sistema?')) {
        const response = await api.get("/user/logout", { headers: { token: getToken() } })
        if (response.status === 200) {
            logout();
            window.location.href = '/Entrar'
        } else {
            alert('Não foi possível fazer o logout')
        }
    }

}