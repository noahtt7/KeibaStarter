import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RaceButton } from './components/RaceButton';

function HomePage() {
    const navigate = useNavigate();

    const handleRaceClick = () => {
      navigate('/races');
    };

    return (
        <div>
            <h3> home</h3>
            <button onClick={handleRaceClick}>Simulate a race</button>
        </div>
    )
}

export default HomePage;