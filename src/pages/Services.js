import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const btn = useNavigate();
  const Gotoabout = () => {
    btn('/about')
  }
  
  return (
    <div>
        <h1>This Is Services Page</h1>
        <button onClick={Gotoabout}>Go to About</button>
    </div>
  )
}
