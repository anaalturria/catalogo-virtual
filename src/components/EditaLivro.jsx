import { Alert, Box, Button, Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Fotona from './img/BIBLIOTECAOLD.jpg';

function EditaLivro() {

    document.body.style.backgroundImage = "url("+ Fotona + ")";

    const { id } = useParams();
    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ ano, setAno ] = useState("");
    const [ duracao, setDuracao ] = useState("");
    const [ categoria, setCategoria ] = useState("");
    const [ imagem, setImagem ] = useState ("");
    const [ edita, setEdita ] = useState( false );
    const [ erro, setErro ] = useState( false );
    const usuario = localStorage.getItem("usuario");

    useEffect( () => {
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( !json.status ) {
                setTitulo( json.titulo );
                setDescricao( json.descricao );
                setAno( json.ano );
                setDuracao( json.duracao );
                setCategoria( json.categoria );
                setImagem( json.imagem);
            } else {
                setErro("Filme não encontrado");
            }
        })
        .catch( (erro) => { setErro(true)})
    }, [] );

    function Editar(evento) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos/", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    titulo: titulo,
                    descricao: descricao,
                    ano: "",
                    duracao: "", 
                    categoria: categoria,
                    imagem: imagem,
                    usuario: localStorage.getItem("usuario")

                }
            )
            
        })
        .then( (resposta) => resposta.json() )
        .then( (json) => { 
            if( json._id ) {
                setEdita(true);
                setErro(false);
            } else {
                setErro(true);
                setEdita(false);
            }
        })
        .catch( (erro) => { setErro(true)})
    }

  return (
    <>
        <Container omponent="section" maxWidth="sm">
            <Box 
                sx={{
                mt: 10, 
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                padding: "50px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                { erro && ( <Alert severity="warning">{erro}</Alert>)}
                { edita && ( <Alert severity="success">Filme Editado</Alert>)}
                    <Box component="form" onSubmit={Editar}>
                        <TextField
                            label="titulo" 
                            variant="filled" 
                            type="text" 
                            margin="normal" 
                            fullWidth 
                            value={titulo} 
                            onChange={ (e) => setTitulo( e.target.value)}
                            sx={{
                                background:"rgba(74, 74, 74, 0.83);",
                            }}></TextField>
                        <TextField 
                            label="descricao" 
                            variant="filled" 
                            type="text" 
                            margin="normal" 
                            fullWidth 
                            value={descricao} 
                            onChange={ (e) => setDescricao( e.target.value)}
                            sx={{
                                background:"rgba(74, 74, 74, 0.83);",
                            }}></TextField>
                        
                        <TextField 
                            label="categoria" 
                            variant="filled" 
                            type="text" 
                            margin="normal" 
                            fullWidth 
                            value={categoria} 
                            onChange={ (e) => setCategoria( e.target.value)}
                            sx={{
                                background:"rgba(74, 74, 74, 0.83);",
                            }}></TextField>
                        <TextField 
                            label="Insira seu link" 
                            variant="filled" 
                            type="url" 
                            margin="normal" 
                            fullWidth 
                            value={imagem} 
                            onChange={ (e) => setImagem( e.target.value)}
                            sx={{
                                background:"rgba(74, 74, 74, 0.83);",
                            }}></TextField> 
                        <Box component="figure" 
                            sx={{
                                width:"250px",
                                margin: "0 auto"
                            }}>
                            <img src={imagem} alt={titulo} style={{width: "100%" } }></img>
                        </Box>
                        <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2 } }>Editar</Button>
                </Box>
            </Box>
        </Container>
    </>
  )
}

export default EditaLivro;