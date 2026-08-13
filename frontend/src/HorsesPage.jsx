import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { getCount, listHorses } from './services/KeibaService';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css'

const HorsesPage = () => {
    const [horses, setHorses] = useState([]);

    useEffect(() => {
        listHorses().then((response) => {
            setHorses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function normalizeName(name) {
        return name
                .replaceAll("-", " ")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }

    return(
        <div className="keiba-page">
            <table className='table table-hover table-dark table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Horse Name</th>
                        <th>Age</th>
                        <th>Netkeiba Page</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        horses.map(horse =>
                            <tr key={horse} onClick={() => addRacer(horse.name)}>
                                <td>{normalizeName(horse.name)}</td>
                                <td>{horse.age}</td>
                                <td>
                                    {horse.url ? (
                                        <a
                                        href={horse.url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        style={{
                                            padding: '4px 10px',
                                            border: '1px solid #c9a84c',
                                            color: '#c9a84c',
                                            borderRadius: '3px',
                                            fontSize: '11px',
                                            textDecoration: 'none',
                                            letterSpacing: '0.05em',
                                        }}>
                                            Netkeiba
                                        </a>
                                    ) : "—"}
                                </td>
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

export default HorsesPage;