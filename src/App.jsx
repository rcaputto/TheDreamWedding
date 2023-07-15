import './App.css'
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom'
import Main from './Components/Main'

import Microtunning from './Components/Dossier/Microtunning'
import DossierRaceDay from './Components/Dossier/DossierRaceDay'
import CuatroPorCuatro from './Components/Dossier/CuatroPorCuatro'
import MicroWedding from './Components/Dossier/MicroWedding'
import TunningDos from './Components/Dossier/TunningDos'
import WeddingPlannerOnline from './Components/Dossier/WeddingPlannerOnline'
import WeddingPoint from './Components/Dossier/WeddingPoint'
import Nosotras from './Components/nosotras'
import Galeria from './Components/Galeria'

function App() {
  

  return (
    <Router>
      
    <Routes>  
      <Route path='/' element ={<Main/>}/>
      <Route path='/microtunnig' element = {<Microtunning/>}/>
      <Route path='/race-day' element = {<DossierRaceDay/>}/>
      <Route path='/cuatro-cuatro' element = {<CuatroPorCuatro/>}/>
      <Route path='/MicroWedding' element = {<MicroWedding/> }/>
      <Route path='/TunningDos' element = {<TunningDos/>}/>
      <Route path='/WeddingPlannerOnline' element = {<WeddingPlannerOnline/>}/>
      <Route path='/WeddingPoint' element = {<WeddingPoint/>}/>
      <Route path='/nosotras' element = {<Nosotras/>}/>
      <Route path='/Galeria' element = {<Galeria/>}/>

    </Routes>
    </Router>
  )
}

export default App
