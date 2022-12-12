import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Loading from "../components/Loading"

export default function SessionPage() {
    const [sessions, setSessions] = useState(undefined)
    const { idMovie } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`)
            .then(res => {
                setSessions(res.data)
            })
            .catch(console.log)
    }, [])

    if (sessions === undefined) return <Loading />
    return (
        <>
            <h1>Selecione o horário</h1>
            <ul>{sessions.days.map((d) => (
                <Session key={d.id}>
                    <div>{`${d.date} - ${d.weekday}`}</div>
                    <div>{d.showtimes.map((s) => (
                        <button key={s.id} onClick={()=>navigate(`/assentos/${s.id}`)}>{s.name}</button>
                    ))}
                    </div>
                </Session>
            ))}
            </ul>
        </>
    )
}

const Session = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    div {
        margin: 24px;
    }
    button {
        color:#FFFFFF;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;  
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        border-color: #E8833A;
        margin-right:24px;
    }

`