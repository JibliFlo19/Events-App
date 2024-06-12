import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import TransitionPage from "./Components/TransitionPage/TransitionPage";
import Footer from "./Components/Footer/Footer";
import EventDetailPage from "./Components/EventDetailPage/EventDetailPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetailPage />} />

        <Route></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
