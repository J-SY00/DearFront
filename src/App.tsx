import React from 'react';
import './mainstyles.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';'react-transition-group';
import ChatPage from './pages/Chat';
import HomePage from './pages/Home';
import MainPage from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<div className="main-page"><MainPage/></div>}/>
          <Route path='/home' element={<div className="home-page"><HomePage/></div>}/>
          <Route path='/chat' element={<div className="chat-page"><ChatPage/></div>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
