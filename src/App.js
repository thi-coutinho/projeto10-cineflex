import { BrowserRouter, Routes,Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import SeatPage from "./pages/SeatPage";
import SessionPage from "./pages/SessionPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MoviePage/>}/>
      <Route path="/sessoes/:idSession" element={<SessionPage/>}/>
      <Route path="/assentos/:idSeat" element={<SeatPage/>}/>
      <Route path="/sucesso" element={<SuccessPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}
