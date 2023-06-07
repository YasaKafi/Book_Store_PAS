import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About";
import "./style.css"

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>

        </Router>
        
    )

}
export default App