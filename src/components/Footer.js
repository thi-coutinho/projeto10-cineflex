import styled from "styled-components"
import { LIGHTGRAY} from "../constants/COLORS"

export default function Footer({movieInfo}){
    return (
        <FooterDiv data-test="footer">
            <MoviePoster>
                <img src={movieInfo.movieURL} alt={movieInfo.movieTitle} />
            </MoviePoster>
            <div>
                <div>{movieInfo.movieTitle}</div>
                {movieInfo.date && <div>{movieInfo.weekday} - {movieInfo.sessionTime}</div>}
            </div>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width:100vw;
    height:117px;
    display: flex;
    align-items:center;
    position:fixed;
    bottom:0;
    background-color:${LIGHTGRAY};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    color: #293845;
    gap:14px;
    div {
        font-size: 20px;
    }
`
const MoviePoster = styled.div`
    margin-left:10px;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        margin: 8px;
        width: 48px;
        height: 72px;
    }
`