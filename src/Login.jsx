import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';


/* se o login for verdadeiro, limpa os campos e envia o usuario para outra pagina*/

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

    /*onde verifica as informações do email e senha e se login for falso, 
    o erro é verdadeiro e aparece uma mensagem de alert*/

    function Autenticar(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    senha: senha
                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json.user ) {
                setLogin(true); 
            } else {
                setErro(true);
            }
        })
        .catch( (erro) => { setErro(true)})
    }

  return (

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
            { erro && ( <Alert  severity="warning">Revise seus dados e tente novamente.</Alert> ) }
            <Box component="form" onSubmit={Autenticar}>
                <TextField { ...erro && ("error")} label="Email" variant="filled" type="email" margin="normal" fullWidth value={email} onChange={ (e) => setEmail( e.target.value)}/>
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

  )
};

export default Login;