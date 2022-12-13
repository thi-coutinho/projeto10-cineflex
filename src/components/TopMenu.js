import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LIGHTGRAY } from "../constants/COLORS";

export default function TopMenu({movieInfo}){
    const navigate = useNavigate();
  
    return (
      <TopBar>{movieInfo && <span data-test="go-home-header-btn" onClick={() => navigate(-1)}>←</span>}CINEFLEX</TopBar>
    );
  }
  const TopBar = styled.div`
    height: 67px;
    display: flex;
    justify-content:center;
    align-items:center;
    position:sticky;
    top:0;
    background-color:${LIGHTGRAY};
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    span {
      position:fixed;
      left:10px;
      top:10px;
      font-size:60px;
      color: black;
      &:hover{
        cursor: pointer;
      }
    }
  `
  