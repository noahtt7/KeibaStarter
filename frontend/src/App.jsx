import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { listRaces } from './services/KeibaService'


function App() {
  const [count, setCount] = useState(0)

  const [races, setRaces] = useState('')

  useEffect(() => {
    listRaces().then((response) => {
      setRaces(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Keiba Starter</h1>
      <div className="card">
        <button >New Race</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>{races}</div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Race Name</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              races.map(race =>
                <tr>key={race.name}
                  <td>{race.name}</td>
                </tr>
       
              )
            } */}
            <tr>
              <td>{races}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
