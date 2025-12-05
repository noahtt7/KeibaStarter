import axios from "axios";

const REST_API_BASE_URL = 'https://keibabackend.onrender.com/race/getwinner/4'
const REST_API_SIM_RACE = 'https://keibabackend.onrender.com/race/simulaterace/4'
const REST_API_GET_WINNER = 'https://keibabackend.onrender.com/race/getwinner/4'
const REST_API_CREATE_RACE = 'https://keibabackend.onrender.com/race/createrace/ak'
const REST_API_GET_RACERS = 'https://keibabackend.onrender.com/keiba/horses'
const REST_API_GET_RECENT_RACEID = 'https://keibabackend.onrender.com/race/count'

export const listRaces = () => axios.get(REST_API_BASE_URL);
export const getWinner = () => axios.get(REST_API_GET_WINNER);
export const createRace = () => axios.post(REST_API_CREATE_RACE);
export const getCount = () => axios.get(REST_API_GET_RECENT_RACEID);
//export const listHorses = () => axios.get(REST_API_GET_RACERS);

export const listHorses = () => {
    return axios.get(REST_API_GET_RACERS);
}
