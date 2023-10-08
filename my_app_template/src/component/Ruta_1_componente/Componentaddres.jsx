import React from 'react';
import {  NavLink } from 'react-router-dom';
// import atanagildo from "../Componentes_Reyes/Atanagildo";

export const Componentaddres = () => {
  return (
    
      <nav className='bg-[#37f3d7] flex gap-[40px]'>

      <NavLink to="/atanagildo"> rey_atanagildo </NavLink>

        {/* <Link to="/sisebuto" className='hover:bg-[#6b4df1]'>rey_sisebuto</Link>
        <Link to="/recesvinto" className='hover:bg-[#6b4df1]'>rey_recesvinto</Link>
        <Link to="/ervigio" className='hover:bg-[#6b4df1]'>rey_ervigio</Link>
        <Link to="/ataulfo" className='hover:bg-[#6b4df1]'>rey_ataulfo</Link>
        <Link to="/atanagildo" className='hover:bg-[#6b4df1]'>rey_atanagildo</Link>
        <Link to="/leovigildo" className='hover:bg-[#6b4df1]'>rey_leovigildo</Link> */}
      </nav>
  
  );
};
