import styled from "styled-components"
import { Link } from "react-router-dom";
export default function SuccessPage({ movieInfo }) {
    let cpf = movieInfo.cpf.toString()
    cpf = cpf.length !== 11 ? cpf : cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return (
        <>
            <Greennh1>Pedido feito com sucesso</Greennh1>
            <SessionMovieInfo data-test="movie-info">
                <SessionTitle>Filme e Sessão</SessionTitle>
                <div>{movieInfo.movieTitle}</div>
                <div>{movieInfo.date} - {movieInfo.sessionTime} </div>
            </SessionMovieInfo>
            <SessionMovieInfo data-test="seats-info">
                <SessionTitle>Ingressos</SessionTitle>
                {movieInfo.seatsNumbers.map(s => <div key={s}>Assento {s}</div>)}
            </SessionMovieInfo>
            <SessionMovieInfo data-test="client-info">
                <SessionTitle>Comprador</SessionTitle>
                <div>Nome: {movieInfo.name}</div>
                <div>CPF: {cpf}</div>
                <Link data-test="go-home-btn" to="/"><>Voltar pra Home</></Link>
            </SessionMovieInfo>

        </>
    )
}

const Greennh1 = styled.h1`
    font-weight: 700;
    color: #247A6B;
`
const SessionMovieInfo = styled.div`
    display:flex;
    flex-direction:column;
    color:#293845;
    font-family: 'Roboto', Helvetica, sans-serif;
    justify-content:start;
    margin: 0px 50px;
    font-weight: 400;
    font-size:22px;
    gap:5px;
    a { 
        color:#FFFFFF;
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        margin: 100px auto 30px;
        width: 225px;
        height: 42px;
        left:0;
        right:0;
        background: #E8833A;
        border-radius: 3px;
        &:visited {
            text-decoration:none;
        }
    }
`
const SessionTitle = styled.div`    
    font-weight:700;
    margin:30px 0 10px;
`