import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/test" element={<div>TEST</div>} />
        <Route path="/home" element={<Home />} />
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
