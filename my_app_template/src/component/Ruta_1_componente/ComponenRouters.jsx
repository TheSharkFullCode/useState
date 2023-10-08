import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Componentaddres } from './Componentaddres';
import  Atanagildo  from '../Componentes_Reyes/Atanagildo';


// const enlace = useParams();
export const ComponenRouters = () => {


  return (
    <BrowserRouter>
        <Componentaddres/>
            <Routes>
                {/* <Route path='/atanagildo' element={<Atanagildo/>}/> */}
               
                <Route path='/atanagildo' element={<Atanagildo></Atanagildo>}></Route>
            </Routes>
        
    </BrowserRouter>
  )
}
