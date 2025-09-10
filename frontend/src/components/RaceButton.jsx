import React from 'react'
import Button from 'react-bootstrap/Button'
import ChooseRacerPage from '../ChooseRacerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const handleCreateRace = async (raceStr) => {
    fetch('http://localhost:8080/race/createrace/' + raceStr, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        console.log('new race added');
        // Navigate('/races');
    });
}

export const RaceButton = () => {
    return (
        <div className="race-button">
            <Button variant="primary" onClick={() => handleCreateRace('ak') }>New Race (Arima Kinen)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('tk') }>New Race (Takarazuka Kinen)</Button>
            <Button variant="primary" onClick={() => handleCreateRace("jd") }>New Race (Japan Derby)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('ks') }>New Race (Kikka Sho)</Button>
        </div>
    )
}