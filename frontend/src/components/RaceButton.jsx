import React from 'react'
import Button from 'react-bootstrap/Button'
import ChooseRacerPage from '../ChooseRacerPage'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


export const RaceButton = () => {
    const navigate = useNavigate();
    
    const handleCreateRace = async (raceStr) => {
        fetch('http://localhost:8080/race/createrace/' + raceStr, {
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

    return (
        <div className="race-button">
            <Button variant="primary" onClick={() => handleCreateRace('ak') }>Arima Kinen (Nakayama 2500m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('tk') }>Takarazuka Kinen (Hanshin 2200m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace("jd") }>Japan Derby (Tokyo 2400m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('ks') }>Kikka Sho (Kyoto 3000m)</Button>

            <Button variant="primary" onClick={() => handleCreateRace('fs') }>February Stakes (Tokyo 1600m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('tm') }>Takamatsunomiya Kinen (Chukyo 1200m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('ks') }>Osaka Cup (Hanshin 2000m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('nhk') }>NHK Mile Cup (Tokyo 1600m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('vm') }>Victoria Mile (Kyoto 3000m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('yk') }>Yasuda Kinen (Tokyo 1600m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('ht') }>Spring Tenno Sho (Kyoto 3200m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('at') }>Fall Tenno Sho (Tokyo 2000m)</Button>
            <Button variant="primary" onClick={() => handleCreateRace('jc') }>Japan Cup (Tokyo 2400m)</Button>
        </div>
    )
}