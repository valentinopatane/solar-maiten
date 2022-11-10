import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import Services from "./views/Services/Services";
import Rooms from "./views/Rooms/Rooms";
import Contact from "./views/Contact/Contact";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/servicios" element={<Services />} />
                <Route exact path="/habitaciones" element={<Rooms />} />
                <Route exact path="/contacto" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
