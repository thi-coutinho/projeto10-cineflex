import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react"
import MoviePage from "./pages/MoviePage";
import SeatPage from "./pages/SeatPage";
import SessionPage from "./pages/SessionPage";
import SuccessPage from "./pages/SuccessPage";
import TopMenu from "./components/TopMenu";

export default function App() {
  const [movieInfo,setMovieInfo] = useState(undefined)
  return (
    <BrowserRouter>
      <TopMenu movieInfo={movieInfo}/>
      <Routes>
        <Route path="/" element={<MoviePage setMovieInfo={setMovieInfo}/>} />
        <Route path="/sessoes/:idMovie" element={<SessionPage movieInfo={movieInfo} setMovieInfo={setMovieInfo} />} />
        <Route path="/assentos/:idSession" element={<SeatPage movieInfo={movieInfo} setMovieInfo={setMovieInfo} />} />
        <Route path="/sucesso" element={<SuccessPage  movieInfo={movieInfo}/>} />
      </Routes>
    </BrowserRouter>
  );
}
