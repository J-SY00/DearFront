import React from 'react'
import './mainstyles.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/Main'
import ChatPage from './pages/Chat'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
