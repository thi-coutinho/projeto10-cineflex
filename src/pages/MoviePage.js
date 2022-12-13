import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Loading from "../components/Loading"

export default function MoviePage({setMovieInfo}) {
    const [listMovies, setListMovies] = useState(undefined)
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((res) => setListMovies(res.data))
    }, [])

    if (listMovies === undefined) return <Loading />
    return (
        <>
            <h1>Selecione o filme</h1>
            <ConteinerMovies>{listMovies.map((m) => (
                <Link to={`/sessoes/${m.id}`} onClick={()=>setMovieInfo({movieTitle:m.title,movieURL:m.posterURL})} key={m.id}>
                    <div>
                        <img src={m.posterURL} alt={m.title} />
                    </div>
                </Link>))}</ConteinerMovies>
        </>
    )
}

const ConteinerMovies = styled.div`
    margin: auto;
    width: calc(150px * 2 + 30px);
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap: wrap;
    gap:11px 30px;
    div {
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
    div img {
        margin: 8px;
        width: 129px;
        height: 193px;
    }
`