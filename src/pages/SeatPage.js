import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Loading from "../components/Loading"
import { LIGHTGRAY, LIGHTYELLOW, DARKGRAY, DARKYELLOW, LIGHTGREEN } from "../constants/COLORS"

export default function SeatPage() {
    const [seats, seatSeats] = useState(undefined)
    const [selected, setSelected] = useState([])
    const [cpf, setCpf] = useState("")
    const [name, setName] = useState("")
    const { idSession } = useParams()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
            .then(res => {
                seatSeats(res.data.seats)
            })
            .catch(console.log)
    }, [])
    if (seats === undefined) return <Loading />

    function seatSelection(seat) {
        if (!seat.isAvailable) return
        if (selected.includes(seat.id)) {
            setSelected([...selected].filter(i => i !== seat.id))
        } else {
            setSelected([...selected, seat.id])
        }
    }

    return (
        <>
            <h1>Selecione o(s) assento(s)</h1>
            <ConteinerSeats columns={10}>{seats.map((s) => (
                <Seat key={s.id} onClick={(e) => seatSelection(s)} selected={selected.includes(s.id)} available={s.isAvailable}>{s.name}</Seat>
            ))}</ConteinerSeats>

            <LegendSeats columns={8}>
                <div>
                    <Seat selected={true} available={true} />
                    <p>Selecionado</p>
                </div>
                <div>
                    <Seat selected={false} available={true} />
                    <p>Disponível</p>
                </div>
                <div>
                    <Seat selected={false} available={false} />
                    <p>Indisponível</p>
                </div>
            </LegendSeats>
            <FormStyled onSubmit={e => {
                e.preventDefault()
                console.log(e.target)
            }}>
                <label htmlFor="name">Nome do comprador: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <label htmlFor="cpf">CPF do comprador: </label>
                <input
                    type="text"
                    id="cpf"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <button>Reservar assentos</button>
            </FormStyled>
        </>
    )
}

const Seat = styled.button`
    width: 36px;
    height:36px;
    padding:0;
    font-size:16px;
    text-align:center; 
    border: 1px solid ${props => props.available ? DARKGRAY : DARKYELLOW};
    border-radius: 50%;
    background-color: ${props => props.available ? (props.selected ? LIGHTGREEN : LIGHTGRAY) : LIGHTYELLOW};
`

const ConteinerSeats = styled.div`
    margin-top:16px;
    max-width: calc(36px * ${props => props.columns} + 7px * ${props => props.columns - 1});
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    gap: 7px;
`
const LegendSeats = styled(ConteinerSeats)`
    div {
        color:#4E5A65;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width: 100px;
        gap:15px;
    }
`

const FormStyled = styled.form`
    color:#293845;
    font-size:18px;
    max-width:400px;
    margin: 40px auto;
    display:flex;
    flex-direction: column;
    input {
        font-size:18px;
        color:#293845;
        margin: 7px auto 20px;
        height:51px;
        width:100%;
        padding-left:18px;
        ::placeholder{
            margin-left: 38px;
            font-style: italic;
            font-size: 18px;
        }
    }
    button{
        margin: 10px auto 0px;
        width: 225px;
        height: 42px;
        left:0;
        right:0;
        background: #E8833A;
        border-radius: 3px;
    }
`