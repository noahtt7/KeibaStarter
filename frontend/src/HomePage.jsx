import React from 'react'
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { RaceButton } from './components/RaceButton';
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { listRaces } from './services/KeibaService'

function HomePage() {
    const navigate = useNavigate();

    const [races, setRaces] = useState('')
    
    useEffect(() => {
    listRaces().then((response) => {
        setRaces(response.data);
    }).catch(error => {
        console.error(error);
    })
    }, []);

    const handleRaceClick = () => {
      navigate('/races');
    };

    return (
        <div>
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
            {/* <button onClick={handleRaceClick}>Simulate a race</button> */}

            
            <h1>Keiba Starter</h1>
            {/* <BrowserRouter> */}
                <RaceButton></RaceButton>
            {/* </BrowserRouter> */}

            <div>{races}</div>
        </div>
    )
}

export default HomePage;