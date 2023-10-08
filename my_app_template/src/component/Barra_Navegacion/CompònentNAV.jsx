import React from 'react'
import { NavLink } from 'react-router-dom'

export const CompònentNAV = () => {

  return (
    
        <nav className='flex gap-[20px]'>

            <NavLink to="/" className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold '> pagina1  </NavLink>
            <NavLink to="/pagina2  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> pagina2  </NavLink>
            <NavLink to="/pagina3  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> pagina3  </NavLink>
            <NavLink to="/atanagildo  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Atanagildo  </NavLink>
            <NavLink to="/Ataulfo " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Ataulfo  </NavLink>
            <NavLink to="/Ervigio  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Ervigio  </NavLink>
            <NavLink to="/Leogivildo  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Leogivildo  </NavLink>
            <NavLink to="/Recesvinto  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Recesvinto  </NavLink>
            <NavLink to="/Sisebuto  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Sisebuto  </NavLink>
            <NavLink to="/Teodorico  " className='bg-[gray] rounded-[3px] px-2 py-1 hover:bg-[#bb48af] text-[white] font-semibold'> Teodorico  </NavLink>
            
        </nav>

  )
}
