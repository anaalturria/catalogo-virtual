import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Cadastro() {

    const [ nome, setNome] = useState( "" );
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const [ telefone, setTelefone ] = useState( "" );
    const [ cpf, setCpf ] = useState ("");
    const [ cadastro, setCadastro ] = useState( false );
    const [ erro, setErro ] = useState( false );

    function Cadastrar(evento) {

        evento.preventDefault();
        fetch("http://10.139.75.32:8080/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    nome: nome,
                    email: email,
                    senha: senha,
                    telefone: telefone, 
                    cpf: cpf

                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json.cpf) {
                setCadastro(true);
                setErro(false)
            } else {
                setErro(true);
                setCadastro(false)
            }
        })
        .catch( (erro) => { setErro(true)})
    }
    useEffect( () => {

        setNome("");
        setEmail("");
        setSenha("");
        setTelefone("");
        setCpf("");
        //setCadastro(false);*//
    }, [ cadastro ] )


  return (
  <Container omponent="section" maxWidth="xs">
        <Box
            sx={{
                mt: 10, 
                backgroundColor: "#B8C7EA",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <Typography component="h1" variant='h4'>Faça seu cadastro</Typography>

            { erro && ( <Alert severity="warning">Desculpe, tente novamente.</Alert>)}
            { cadastro && ( <Alert severity="success">Cadastro realizado com sucesso.</Alert>)}

            <Box component="form" onSubmit={Cadastrar}>
                <TextField label="nome" variant="filled" type="text" margin="normal" fullWidth value={nome} onChange={ (e) => setNome( e.target.value)}/>
                <TextField label="Email" variant="filled" type="email" margin="normal" fullWidth value={email} onChange={ (e) => setEmail( e.target.value)}/>
                <TextField label="senha" variant="filled" type="password" margin="normal" fullWidth value={senha} onChange={ (e) => setSenha( e.target.value)}/>
                <TextField label="telefone" variant="filled" type="text" margin="normal" fullWidth value={telefone} onChange={ (e) => setTelefone( e.target.value)}/>
                <TextField label="cpf" variant="filled" type="text" margin="normal" fullWidth value={cpf} onChange={ (e) => setCpf( e.target.value)}/>
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2 } }>Cadastrar</Button>
                <Grid container>
                    <Grid>
                        Já tenho cadastro
                    </Grid>
                </Grid>
            </Box>
        </Box>
  </Container>
    
  )
};

export default Cadastro;

//rfce*/