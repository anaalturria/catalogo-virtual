import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#7481f7',
          light: '#c3cbff',
        },
        secondary: {
          main: '#ff50a3',
        },
        error: {
          main: '#e41e1e',
          dark: '#e8d2d2',
        },
        success: {
          main: '#2dce33',
        },
      },
});

function Login() {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const [ lembrar, setLembrar ] = useState( false );
    const [ login, setLogin ] = useState( false );
    const [ erro, setErro ] = useState (false);
    const navigate = useNavigate();

    useEffect( () => {

        if ( login ) {
            localStorage.setItem( "usuario", JSON.stringify( { email: email } ) );
            setEmail("");
            setSenha("");
            navigate( "/" );
        }
    }, [ login ] );

    function Autenticar(evento){
        evento.preventDefault();
        fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: senha
                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json.statusCode === 401 ) {
                setErro(false);
            } else {
                setLogin(true);
            }
        })
        .catch( (erro) => { setErro(true)})
    }

  return (
    <ThemeProvider theme={theme}>
    <Container component="section" maxWidth="xs">
        <Box 
        sx={{
                mt: 10, 
                backgroundColor: "#B8C7EA",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            >
            <Typography component="h1" variant='h4'>Entrar</Typography>
            <Box component="form" onSubmit={Autenticar}>
                <TextField label="Email" variant="filled" type="email" margin="normal" fullWidth value={email} onChange={ (e) => setEmail( e.target.value)}/>
                <TextField label="senha" variant="filled" type="password" margin="normal" fullWidth value={senha} onChange={ (e) => setSenha( e.target.value)}/>
                <FormControlLabel
                    control={<Checkbox value={lembrar} name="lembrar" onChange={(e) => setLembrar(!lembrar)}/>}
                    label="Lembrar-me"
                />

                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2 } }>Login</Button>
                <Grid container>
                    <Grid item xs>
                        Esqueci minha senha
                    </Grid>
                    <Grid item>
                        Cadastrar
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    </ThemeProvider>
  )
};

export default Login;