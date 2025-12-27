import React from 'react'
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { RaceButton } from './components/RaceButton';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
//import { listRaces } from './services/KeibaService'
import './RaceButton.css';

function HomePage() {
    const navigate = useNavigate();

    const [races, setRaces] = useState('')
    
    // useEffect(() => {
    // listRaces().then((response) => {
    //     setRaces(response.data);
    // }).catch(error => {
    //     console.error(error);
    // })
    // }, []);

    const handleRaceClick = () => {
      navigate('/races');
    };

    return (
        <div>
        <Navbar expand="lg" className="keiba-navbar sticky-top">
                <Container fluid>
                    <Navbar.Brand href="#" className="keiba-brand">Keiba Simulator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="keiba-nav-link">Home</Nav.Link>
                            <Nav.Link href="/horses" className="keiba-nav-link">Horses</Nav.Link>
                            <Nav.Link href="#" className="keiba-nav-link">Race History</Nav.Link>
                            <Nav.Link href="#" className="keiba-nav-link">Dropdown</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center gap-3">
                            <Button variant="light">Login</Button>
                            <a href="https://en.netkeiba.com/" className="netkeiba-link text-decoration-none">Netkeiba</a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
            {/* <h1>Keiba Starter</h1> */}
            {/* <BrowserRouter> */}
                <RaceButton></RaceButton>
            {/* </BrowserRouter> */}

            <div>{races}</div>
        </div>
    )
}

export default HomePage;