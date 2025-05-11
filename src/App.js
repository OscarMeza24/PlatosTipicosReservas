import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Importa el Footer
import Mapa from "./pages/Mapa";
import Platos from "./pages/Platos";
import Reservas from "./pages/Reservas";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/platos" element={<Platos />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ Aquí se muestra el Footer en todas las páginas */}
    </Router>
  );
}

export default App;
