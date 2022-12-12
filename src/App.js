import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { LIGHTGRAY } from "./constants/COLORS";
import MoviePage from "./pages/MoviePage";
import SeatPage from "./pages/SeatPage";
import SessionPage from "./pages/SessionPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar>CINEFLEX</TopBar>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/sessoes/:idMovie" element={<SessionPage />} />
        <Route path="/assentos/:idSession" element={<SeatPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const TopBar = styled.div`
  height: 67px;
  display: flex;
  justify-content:center;
  align-items:center;
  position:sticky;
  background-color:${LIGHTGRAY};
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #E8833A;
`
