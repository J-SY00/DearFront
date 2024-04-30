import React from 'react';
import './mainstyles.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import ChatPage from './pages/Chat';
import HomePage from './pages/Home';
import MainPage from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
