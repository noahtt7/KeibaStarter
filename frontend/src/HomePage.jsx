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
import './RaceButton.css';

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
        <NavBar expand="lg" className="keiba-navbar sticky-top">
                <Container fluid>
                    <NavBar.Brand href="#" className="keiba-brand">Keiba Simulator</NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="keiba-nav-link">Home</Nav.Link>
                            <Nav.Link href="#" className="keiba-nav-link">Horses</Nav.Link>
                            <Nav.Link href="#" className="keiba-nav-link">Race History</Nav.Link>
                            <Nav.Link href="#" className="keiba-nav-link">Dropdown</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center gap-3">
                            <Button variant="light">Login</Button>
                            <a href="#" className="netkeiba-link text-decoration-none">Netkeiba</a>
                        </div>
                    </NavBar.Collapse>
                </Container>
            </NavBar>

            
            {/* <h1>Keiba Starter</h1> */}
            {/* <BrowserRouter> */}
                <RaceButton></RaceButton>
            {/* </BrowserRouter> */}

            <div>{races}</div>
        </div>
    )
}

export default HomePage;