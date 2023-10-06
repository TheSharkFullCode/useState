import React from 'react'
import { NavLink } from 'react-router-dom'

export const CompònentNAV = () => {

  return (
        <nav className='flex gap-[20px]'>

            <NavLink to="/" className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold '> pagi  na1  </NavLink>
            <NavLink to="/pagina2  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> pagina2  </NavLink>
            <NavLink to="/pagina3  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> pagina3  </NavLink>
        </nav>

  )
}
