import React from 'react'
import { useNavigate } from 'react-router-dom';
import Body from '../components/Body';
;

export default function Home() {
  const btn = useNavigate();
  const Gotoservices = () => {
    btn('/services')
  }
  return (
    <div>
      <Body />
    </div>
  )
}
