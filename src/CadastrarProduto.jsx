import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Style from "./CadastrarProduto.module.css";

function CadastrarProduto() {

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ ano, setAno ] = useState("");
    const [ duracao, setDuracao ] = useState("");
    const [ categoria, setCategoria ] = useState("");
    const [ imagem, setImagem ] = useState ("");
    const [ cadastro, setCadastro ] = useState( false );
    const [ erro, setErro ] = useState( false );



    function Cadastrar(evento) {

        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    ano: "",
                    duracao: "", 
                    categoria: categoria,
                    imagem: imagem

                }
            )
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json._id) {
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
                backgroundColor: "#424242",
                color: "white",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                { erro && (<Alert severity="warning">Filme já cadastrado. Tente novamente, por favor!</Alert>)}
                { cadastro && (<Alert severity="success">Obrigado por cadastrar seu filme!</Alert>)}
            <Typography component="h1" variant='h4'>Livros</Typography>
            <Box component="form" onSubmit={Cadastrar}>
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
                    <img src={imagem}  style={{width: "100%" } }></img>
                </Box>
                <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2 } }>Enviar</Button>
            </Box>

        </Box>
    </Container>

  )
};

export default CadastrarProduto;