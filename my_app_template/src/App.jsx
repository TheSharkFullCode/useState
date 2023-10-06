import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PaginaA } from './component/PaginaA'
import { CompenentB } from './component/paginaB/CompenentB'
import { ComponentC } from './component/paginaC/ComponentC'
import {BrowserRouter,Router,Route,Navigate, Routes  } from "react-router-dom";

function App() {

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
          <Routes>
              <Route path="/" element={<PaginaA/>} />
              <Route path="/pagina2" element={<CompenentB/>} />
              <Route path="/pagina3" element={<ComponentC/>} />
          </Routes>
      </BrowserRouter>
     
      </div>
     
    </>
  )
}

export default App
