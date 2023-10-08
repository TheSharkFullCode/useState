import React from 'react'
import atanagildo from "../../assets/reyes/rey_atanagildo.png";

import Ataulfo from "../../assets/reyes/rey_ataulfo.png";
import Ervigio from "../../assets/reyes/rey_ervigio.png";

import Leovigildo from "../../assets/reyes/rey_leogivildo.png";

import Recesvinto from "../../assets/reyes/rey_recesvinto.png";
import Sisebuto from "../../assets/reyes/rey_sisebuto.png";
import Teodorico from "../../assets/reyes/rey_teodorico.png";
import {Componentaddres} from "../Ruta_1_componente/Componentaddres";




export const Homepage = () => {
    const reyes=[atanagildo,Ataulfo,Ervigio,Leovigildo,Recesvinto,Sisebuto,Teodorico];

  return (

    <div className='bg-[#33de91] flex flex-wrap gap-[5px]'>
        
      <div>
        <Componentaddres/>

      </div>

      <span>Welcome  to Home</span>
      
      {reyes.map((url, index) => (
        <img key={index} src={url} alt="" />
      ))}

        


    </div>
  )
}
