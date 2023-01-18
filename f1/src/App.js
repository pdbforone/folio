import React from "react";
import './App.css';
import Homepage from "./Components/Homepage";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Order from "./Components/Order";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      
      
      <Routes>
      <Route path="/home" element={
      <Homepage/>} />
      <Route path="/about" element={
      <About/>} />
      <Route path="/menu" element={
        <Menu/>} />
      <Route path="/order" element={
      <Order/>}/>
      <Route path="/login" element={
      <Login/>}/>
       </Routes>

    </>
  );
}

export default App;
