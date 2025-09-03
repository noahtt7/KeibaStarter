import React from 'react';
import { listHorses } from './services/KeibaService';

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
        <div>
            <h1>Choose Your Racer</h1>
            {/* Add racer selection UI here */}
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Stay ID</th>
                        <th>Stay Name</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        horses.map(horse =>
                            <tr key={stay.name}>
                                <td>{stay.runsTurf}</td>
                                <td>{stay.age}</td>
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