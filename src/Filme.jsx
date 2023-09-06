import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function Filme() {

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ ano, setAno ] = useState("");
    const [ duracao, setDuracao ] = useState("");
    const [ categoria, setCategoria ] = useState("");
    const [ imagem, setImagem ] = useState ("");
    const [ cadastro, setCadastro ] = useState( false );
    const [ erro, setErro ] = useState( false );



    function Autentica(evento) {

        evento.preventDefault();
        fetch("http://10.139.75.32:8080/filmes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao, 
                    categoria: categoria,
                    imagem: imagem

                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json.titulo) {
                setCadastro(true);
                setErro(false)
            } else {
                setErro(true);
                setCadastro(false)
            }
        })
        .catch( (erro) => { setErro(true)})
    }



  return (
    <Container omponent="section" maxWidth="sm">
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
            <Typography component="h1" variant='h4'>Filmes</Typography>
            <Box>
                <TextField 
                    label="titulo" 
                    variant="filled" 
                    type="text" 
                    margin="normal" 
                    fullWidth 
                    value={titulo} 
                    onChange={ (e) => setTitulo( e.target.value)}></TextField>
                <TextField 
                    label="descricao" 
                    variant="filled" 
                    type="text" 
                    margin="normal" 
                    fullWidth 
                    value={descricao} 
                    onChange={ (e) => setDescricao( e.target.value)}></TextField>
                <TextField 
                    label="ano" 
                    variant="filled" 
                    type="text" 
                    margin="normal" 
                    fullWidth 
                    value={ano} 
                    onChange={ (e) => setAno( e.target.value)}></TextField>
                <TextField 
                    label="duração" 
                    variant="filled" 
                    type="text" 
                    margin="normal" 
                    fullWidth 
                    value={duracao} 
                    onChange={ (e) => setDuracao( e.target.value)}></TextField>
                <TextField 
                    label="categoria" 
                    variant="filled" 
                    type="text" 
                    margin="normal" 
                    fullWidth 
                    value={categoria} 
                    onChange={ (e) => setCategoria( e.target.value)}></TextField>
                <TextField 
                    label="Insira seu link" 
                    variant="filled" 
                    type="url" 
                    margin="normal" 
                    fullWidth 
                    value={imagem} 
                    onChange={ (e) => setImagem( e.target.value)}></TextField> 
                <Box component="figure" sx={
                    {
                        width:"250px",
                        margin: "0 auto"
                    }
                }>
                    <img src={imagem} alt={titulo} style={{width: "100%" } }></img>
                </Box>
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2 } }>Enviar</Button>
            </Box>

        </Box>
    </Container>

  )
};

export default Filme;