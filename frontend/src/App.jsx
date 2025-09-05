import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { listRaces } from './services/KeibaService'
import { createRace } from './services/KeibaService'
import { Header } from './components/Header'
import { RaceManager } from './components/RaceManager'
import { RaceButton } from './components/RaceButton'
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
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

  const handleCreateRace = async (raceStr) => {
    fetch('http://localhost:8080/race/createrace/' + raceStr, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      }).then(() => {
        console.log('new race added');
      });
    }

    // const handleRaceClick = () => {
    //   navigate('/races');
    // };

  return (
    <>
    {/* <Header> */}
      <NavBar expand="lg" className='navbar navbar-dark bg-dark'>
        <Container>
          <NavBar.Brand href="#home">Keiba Simulator</NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />

          <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Horses</Nav.Link>
            <Nav.Link href="#link">Race History</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button className="bg-white text-dark">Login</Button>
        </NavBar.Collapse>

          {/* <Navbar.Brand href="#home">Test ting</Navbar.Brand> */}
          <a className="navbar=brand" href="#">Netkeiba</a>
        </Container>
      </NavBar>

      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <HomePage/> }/>
          <Route path='/races' element = { <ChooseRacerPage/> }/>
        </Routes>
      </BrowserRouter>
    {/* </Header> */}
      <div>

      </div>
        <h1>Keiba Starter</h1>
        <RaceButton></RaceButton>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <button onClick={ handleRaceClick }>hi hi</button> */}
      </div>

      <div>{races}</div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Race Name</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              races.map(race =>
                <tr>key={race.name}
                  <td>{race.name}</td>
                </tr>
       
              )
            } */}
            <tr>
              <td>{races}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
