import { useEffect, useState } from 'react'
import './App.css'
//import { listRaces } from './services/KeibaService'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChooseRacerPage from './ChooseRacerPage';
import HomePage from './HomePage';
import HorsePage from './HorsesPage';

function App() {
  const [count, setCount] = useState(0)

  const [races, setRaces] = useState('')
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   listRaces().then((response) => {
  //     setRaces(response.data);
  //   }).catch(error => {
  //     console.error(error);
  //   })
  // }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
          <Route path='/races' element = { <ChooseRacerPage/> }/>
          <Route path='/horses' element = { <HorsePage/> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
