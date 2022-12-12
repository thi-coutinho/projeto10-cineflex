export default function Seat({available,number,selected,setSelected}) {

    
    return  <Seat key={s.id} available={s.isAvailable}>{s.name}</Seat>
}


const Seat = styled.button`
    width: 26px;
    height:26px;
    padding:0;
    text-align:center; 
    border: 1px solid ${props => props.available? DARKGRAY : DARKYELLOW};
    border-radius: 50%;
    background-color: ${props => props.available? LIGHTGRAY : LIGHTYELLOW};
`