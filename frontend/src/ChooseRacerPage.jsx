import React, { useState, useEffect } from 'react';
import { getCount, listHorses } from './services/KeibaService';
import Button from 'react-bootstrap/Button';
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
    })

    const parseCount = async () => {
        const result = await fetch('http://localhost:8080/race/count');
        const data = await result.json();
        return data;
    };

    const addRacer = async (racerName) => {
        const count = await parseCount();
        // console.log(count);
        fetch(`http://localhost:8080/race/addracer/${count}/${racerName}`, {
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

    const simulateRace = async () => {
        const count = await parseCount();
        fetch(`http://localhost:8080/race/simulaterace/${count}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        }).then (async () => {
            const result = await fetch(`http://localhost:8080/race/getwinner/${count}`);
            const winner = (await result.text()).replaceAll("-", " ");
            const winnerName = capitalizeName(winner);
            console.log('simulating race' + count +' winner is ' + winnerName);
            setWinnerText(winnerName);
        });
    };

    return (
        <div className='horse-container'>
            <h1>Choose Your Racer</h1>
            {/* Add racer selection UI here */}
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Horse Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        horses.map(horse =>
                            <tr key={horse.name} onClick={() => addRacer(horse.name)}>
                                <td>{horse.name}</td>
                                <td>{horse.age}</td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
            <div>
                <Button variant="primary" onClick={simulateRace}>Simulate Race</Button>
                {winnerText && (<p>The winner is {winnerText}</p>)}
            </div>
        </div>
    );
};

export default ChooseRacerPage;