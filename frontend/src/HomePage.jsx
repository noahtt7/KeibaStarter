import React from 'react'
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { RaceButton } from './components/RaceButton';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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

    const handleHorsesClick = () => {
        navigate('/horses');
    };

    return (
        <div>
        <Navbar expand="lg" className="keiba-navbar sticky-top">
                <Container fluid>
                    <Navbar.Brand href="#" className="keiba-brand">KeibaIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="keiba-nav-link">Home</Nav.Link>
                            <Nav.Link onClick={() => handleHorsesClick()} className="keiba-nav-link">Horses</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center gap-3">
                            {/* <Button variant="light">Login</Button> */}
                            <Button variant="outline-info" href="https://en.netkeiba.com/" target="_blank" className="netkeiba-link">Netkeiba</Button>
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