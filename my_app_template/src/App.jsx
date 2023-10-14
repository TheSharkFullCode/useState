import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PaginaA } from './component/PaginaA'
import { CompenentB } from './component/paginaB/CompenentB'
import { ComponentC } from './component/paginaC/ComponentC'
import {BrowserRouter,Route, Routes  } from "react-router-dom";
import { CompònentNAV } from './component/Barra_Navegacion/CompònentNAV'

import { Atanagildo } from "./component/Componentes_Reyes/Atanagildo";

import { Ataulfo} from './component/Componentes_Reyes/Ataulfo';
import {Leogivildo  } from "./component/Componentes_Reyes/Leogivildo";

import { Ervigio} from './component/Componentes_Reyes/Ervigio';
import { Recesvinto} from './component/Componentes_Reyes/Recesvinto';
import { Sisebuto} from './component/Componentes_Reyes/Sisebuto';
import { Teodorico} from './component/Componentes_Reyes/Teodorico';

import AtanagildoImage from './assets/reyes/rey_atanagildo.png';
import AtaulfoImage from './assets/reyes/rey_ataulfo.png';
import LeogivildoImage from './assets/reyes/rey_leogivildo.png';
import ErvigioImage from './assets/reyes/rey_ervigio.png';
import RecesvintoImage from './assets/reyes/rey_recesvinto.png';
import SisebutoImage from './assets/reyes/rey_sisebuto.png';
import TeodoricoImage from './assets/reyes/rey_teodorico.png';

function App() {

  const componentImage = {

    Atanagildo: AtanagildoImage,
    Ataulfo: AtaulfoImage,
    Leogivildo:LeogivildoImage,
    Ervigio:ErvigioImage,
    Recesvinto:RecesvintoImage,
    Sisebuto:SisebutoImage,
    Teodorico:TeodoricoImage,

  }

  return (
    <>
      <div className='flex justify-around items-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <span>Reac + Vite</span>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className=''>
      <BrowserRouter>
          <CompònentNAV/>
          <Routes>
              <Route path="/" element={<PaginaA/>} />
              <Route path="/pagina2" element={<CompenentB/>} />
              <Route path="/pagina3" element={<ComponentC/>} />

              <Route path='/atanagildo' element={<Atanagildo image={componentImage.Atanagildo} className="bg-[#a2ff9e] flex justify-center mt-[10px]"/> } />
              <Route path='/Ataulfo' element={<Ataulfo image={componentImage.Ataulfo} className="bg-[#6470f1] text-2xl font-semibold flex justify-center mt-[10px]"/>}/>

              <Route path='/Leogivildo' element={<Leogivildo image={componentImage.Leogivildo} className="bg-[#3860cf] text-2xl font-semibold flex justify-center mt-[10px]"/>}/>          
              <Route path='/ervigio' element={<Ervigio image={componentImage.Ervigio} className="bg-[#bdd93e] text-2xl font-semibold flex justify-center mt-[10px]"/>}/>
              <Route path='/recesvinto' element={<Recesvinto image={componentImage.Recesvinto} className="bg-[#797e8b] text-2xl font-semibold flex justify-center mt-[10px]" />}/>
              <Route path='/sisebuto' element={<Sisebuto image={componentImage.Sisebuto} className="bg-[#bb81c0] text-2xl font-semibold flex justify-center mt-[10px]"/>}/>
              <Route path='/teodorico' element={<Teodorico image={componentImage.Teodorico} className="bg-[#dd5d72] text-2xl font-semibold flex justify-center mt-[10px]"/>}/>
              
          </Routes>
      
      </BrowserRouter>
     
      </div>
     
    </>
  )
}

export default App
