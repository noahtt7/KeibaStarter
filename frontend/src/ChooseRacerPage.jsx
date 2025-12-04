import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { getCount, listHorses } from './services/KeibaService';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css'

const ChooseRacerPage = () => {
    const [horses, setHorses] = useState([]);

    const [winnerText, setWinnerText] = useState(null);

    useEffect(() => {
        listHorses().then((response) => {
            setHorses(response.data);
        }).catch(error =>  {
            console.error(error);
        })
    }, [])

    const parseCount = async () => {
        const result = await fetch('https://keibabackend.onrender.com/race/count');
        const data = await result.json();
        return data;
    };

    const addRacer = async (racerName) => {
        const count = await parseCount();
        // console.log(count);
        fetch(`https://keibabackend.onrender.com/race/addracer/${count}/${racerName}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }).then (() => {
            console.log(racerName + ' added.');
        });
    };

    function capitalizeName(name) {
        return name
            .split(' ') // Split the sentence into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); 
    }

    function normalizeName(name) {
        return name
                .replaceAll("-", " ")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }

    const simulateRace = async () => {
        const count = await parseCount();
        fetch(`https://keibabackend.onrender.com/race/simulaterace/${count}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }).then (async () => {
            const result = await fetch(`https://keibabackend.onrender.com/race/getwinner/${count}`);
            const winner = (await result.text()).replaceAll("-", " ");
            const winnerName = capitalizeName(winner);
            console.log('simulating race' + count +' winner is ' + winnerName);
            setWinnerText(winnerName);
        });
    };

    return (
        <div className='keiba-page'>
            <Navbar expand="lg" className="keiba-navbar sticky-top">
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
            </Navbar>
            <h1 className="hero-title">Choose Your Racers</h1>
            {/* Add racer selection UI here */}
            <table className='table table-hover table-dark table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Horse Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        horses.map(horse =>
                            <tr key={horse} onClick={() => addRacer(horse.name)}>
                                <td>{normalizeName(horse.name)}</td>
                                <td>{horse.age}</td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
            <div>
                <Button variant="info" className="btn btn-light btn-lg btn-block" onClick={simulateRace}>Simulate Race</Button>
                {winnerText && (<h3 className="hero-subtitle">The winner is {winnerText}</h3>)}
            </div>
        </div>
    );
};

export default ChooseRacerPage;