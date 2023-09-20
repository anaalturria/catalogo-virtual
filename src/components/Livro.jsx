import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Lixo from '@mui/icons-material/Backspace';
import Editar from '@mui/icons-material/BorderColor';

function Livro(props) {
  return (
    <Card sx={{maxWidth: 345, background: "white", borderRadius: 5
    }}>
        <CardActionArea>
            <CardMedia
                component="img"
                padding="10px"
                image={props.imagem}
                alt={props.titulo}
            />

            <CardContent >
                <Typography variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="black">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={4}>
                        <span>{props.duracao}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Box sx={{display: 'flex' }}>
            <Grid item xs={6} sx={{marginLeft: 2 }}>
                <Lixo onClick={props.excluir}></Lixo>
            </Grid>
            <Grid item xs={6} sx={{marginLeft: 2 }}>
                <Link href={ "edicao/" + props.id }><Editar></Editar></Link>
            </Grid>
        </Box>
       
    </Card>
  )
}

export default Livro;