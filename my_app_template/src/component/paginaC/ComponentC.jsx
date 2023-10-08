import React from 'react'
import { Link } from 'react-router-dom'

export const ComponentC = () => {
  return (
    <div>
        <span className='bg-[#a372e4]'>Componente C</span> <br /> <br />
        <Link to="https://www.google.es" className='bg-[#f5b6c0] text-3xl rounded'>ir a Goolge</Link>
    </div>
  )
}
