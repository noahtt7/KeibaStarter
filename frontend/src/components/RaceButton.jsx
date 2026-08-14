import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../RaceButton.css';

export const RaceButton = () => {
    const navigate = useNavigate();
    const [selectedRace, setSelectedRace] = useState(null);
    
    const races = [
        { id: 'ak', name: 'Arima Kinen', track: 'Nakayama', distance: '2500m', surface: 'Turf', gradient: 1 },
        { id: 'tk', name: 'Takarazuka Kinen', track: 'Hanshin', distance: '2200m', surface: 'Turf', gradient: 2 },
        { id: 'jd', name: 'Japan Derby', track: 'Tokyo', distance: '2400m', surface: 'Turf', gradient: 3 },
        { id: 'ks', name: 'Kikka Sho', track: 'Kyoto', distance: '3000m', surface: 'Turf', gradient: 4 },
        { id: 'fs', name: 'February Stakes', track: 'Tokyo', distance: '1600m', surface: 'Dirt', gradient: 5 },
        { id: 'tmk', name: 'Takamatsunomiya Kinen', track: 'Chukyo', distance: '1200m', surface: 'Turf', gradient: 6 },
        { id: 'oc', name: 'Osaka Cup', track: 'Hanshin', distance: '2000m', surface: 'Turf', gradient: 7 },
        { id: 'nhk', name: 'NHK Mile Cup', track: 'Tokyo', distance: '1600m', surface: 'Turf', gradient: 8 },
        { id: 'vm', name: 'Victoria Mile', track: 'Kyoto', distance: '1600m', surface: 'Turf', gradient: 9 },
        { id: 'yk', name: 'Yasuda Kinen', track: 'Tokyo', distance: '1600m', surface: 'Turf', gradient: 10 },
        { id: 'ht', name: 'Spring Tenno Sho', track: 'Kyoto', distance: '3200m', surface: 'Turf', gradient: 11 },
        { id: 'at', name: 'Fall Tenno Sho', track: 'Tokyo', distance: '2000m', surface: 'Turf', gradient: 12 },
        { id: 'jc', name: 'Japan Cup', track: 'Tokyo', distance: '2400m', surface: 'Turf', gradient: 13 },
        { id: 'td', name: 'Tokyo Daishoten', track: 'Oi', distance: '2000m', surface: 'Dirt', gradient: 14 },
    ];

    const handleCreateRace = async (raceStr) => {
        fetch('https://keibabackend.onrender.com/race/createrace/' + raceStr, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(() => {
            console.log('new race added');
            navigate('/races');
        });
    };

    const handleRaceClick = (raceId) => {
        setSelectedRace(raceId);
        handleCreateRace(raceId);
    };

    return (
        <div className="keiba-page">
            {/* Header */}
            {/* <Navbar expand="lg" className="keiba-navbar sticky-top">
                <Container fluid>
                    <Navbar.Brand href="#" className="keiba-brand">Keiba Simulator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
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
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            {/* Main Content */}
            <div className="race-selector-wrapper">
                <div className="text-center mb-5">
                    <h1 className="hero-title">KeibaIO</h1>
                    <p className="hero-subtitle">Choose a G1 Japanese horse race to simulate</p>
                </div>

                <Container>
                    <Row className="g-4">
                        {races.map((race) => (
                            <Col key={race.id} md={6} lg={4}>
                                <div 
                                    className={`race-card race-card-${race.gradient} ${selectedRace === race.id ? 'selected' : ''}`}
                                    onClick={() => handleRaceClick(race.id)}
                                >
                                    <div className="race-card-content">
                                        <div className="race-name">{race.name}</div>
                                        <div className="race-info">
                                            <span>📍 {race.track}</span>
                                            <div className="race-metrics" style={{ display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                                                <span className="race-distance">{race.distance}</span>
                                                <span className="race-surface">{race.surface}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};