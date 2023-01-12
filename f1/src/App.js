import React from "react";
import './App.css';
import Homepage from "./Home";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import Login from "./Login";
import Order from "./Order";

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
