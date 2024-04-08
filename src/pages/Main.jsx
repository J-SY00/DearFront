import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/chat')}>Use</button>
    </div>
  )
}

