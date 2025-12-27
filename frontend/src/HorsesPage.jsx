import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { getCount, listHorses } from './services/KeibaService';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css'

const HorsesPage = () => {
    const [horses, setHorses] = useState([]);

    return(
        <div className="keiba-page">
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
        </div>
    );
};