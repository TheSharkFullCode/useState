import React, { useState } from 'react'

export const ChildTicTacToe = ({value,onhandleClick}) => {


  return (

    <div className='fl'>

        <button className='border-[1px] rounded-[3px] w-[40px] h-[50px] border-[#ba4444]' onClick={onhandleClick}>{value}</button>

    </div>
  )
//   En el eje x se expande hirizontal el padin
}
