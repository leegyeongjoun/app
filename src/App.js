import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import Footer from "./component/Footer";

function App() {
   
 
 return(
    <div className="App">
      <Navbar />
        <Routes>
        {/* 시작하자 마자 홈페이지가 보지게 하는 것 */}
        <Route path="/APP"  element={<Home />} />
         <Route path="/"  element={<Home />} />
         <Route path="movies"  element={<Movies />} />
         <Route path="users"  element={<Users />} />
      </Routes>
      
      
        <Footer />
    </div>
 )
}

export default App;