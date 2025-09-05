import React, { useState, useEffect } from 'react';
import { listHorses } from './services/KeibaService';
import './App.css'

const ChooseRacerPage = () => {
    const [horses, setHorses] = useState([]);

    useEffect(() => {
        listHorses().then((response) => {
            setHorses(response.data);
        }).catch(error =>  {
            console.error(error);
        })
    })

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
                            <tr key={horse.name}>
                                <td>{horse.name}</td>
                                <td>{horse.age}</td>
                                {/* <td>
                                    <img src={ imgMap[stay.id] } alt="Logo" style={{width: '100px'}}/>
                                </td> */}
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

export default ChooseRacerPage;