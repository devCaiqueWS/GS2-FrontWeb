import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Contato from "./routes/Contato";
import NavBar from "./components/NavBar";
import Login from "./routes/Login";
import Projeto from "./routes/Projeto";
import Sobre from "./routes/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
