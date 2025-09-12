import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { listRaces } from './services/KeibaService'
import { createRace } from './services/KeibaService'
import { Header } from './components/Header'
import { RaceManager } from './components/RaceManager'
import { RaceButton } from './components/RaceButton'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ChooseRacerPage from './ChooseRacerPage';
import HomePage from './HomePage';

function App() {
  const [count, setCount] = useState(0)

  const [races, setRaces] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    listRaces().then((response) => {
      setRaces(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
          <Route path='/races' element = { <ChooseRacerPage/> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
