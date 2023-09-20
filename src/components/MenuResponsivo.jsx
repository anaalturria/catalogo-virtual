
import { AppBar, Avatar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import Logo from '@mui/icons-material/AutoStories';
import Barra from '@mui/icons-material/Dehaze';



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MenuResponsivo() {
    const [anchorElNav, setAnchorElNav] = useState (null);
    const [anchorElUser, setAnchorElUser] = useState (null);

    const handleOpenNavMenu = (event ) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event ) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <AppBar>
        <Container maxWidth="xl" sx={{background:"black"}}>
            <Toolbar disableGutters>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      
                      
                    }}
                ><Logo></Logo></Typography>
                
               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        ><Barra></Barra></IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                       
                    >
                        <Link  href="/produto">Cadastrar Livros</Link>
                    </Menu>
               </Box>
               <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link href="/produto">
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'red', display: 'block',  }}
                        >Cadastrar livros
                    </Button>  
                    </Link>
                </Box>
                
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="" src="src/components/img/YENICON.jpg" />
                        </IconButton>
                    </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <Link href='/Login'>
                    <MenuItem  onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                    </Link>
                </Menu>
            </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default MenuResponsivo;