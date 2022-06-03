import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";


const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default Routing