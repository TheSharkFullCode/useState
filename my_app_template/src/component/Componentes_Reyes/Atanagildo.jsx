import React from 'react'
import { ComponentTicTac } from '../Tres_en_Raya/ComponentTicTac'

export const Atanagildo = ({image,className}) => {

  return (
    <div className={className}>
        <img src={image} alt="Atanagildo" />
        <ComponentTicTac/>
    </div>
  )
}
export default Atanagildo

