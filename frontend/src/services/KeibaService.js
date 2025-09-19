import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/race/getwinner/4'
const REST_API_SIM_RACE = 'http://localhost:8080/race/simulaterace/4'
const REST_API_GET_WINNER = 'http://localhost:8080/race/getwinner/4'
const REST_API_CREATE_RACE = 'http://localhost:8080/race/createrace/ak'
const REST_API_GET_RACERS = 'http://localhost:8080/keiba/horses'
const REST_API_GET_RECENT_RACEID = 'http://localhost:8080/race/count'

export const listRaces = () => axios.get(REST_API_BASE_URL);
export const getWinner = () => axios.get(REST_API_GET_WINNER);
export const createRace = () => axios.post(REST_API_CREATE_RACE);
export const getCount = () => axios.get(REST_API_GET_RECENT_RACEID);
//export const listHorses = () => axios.get(REST_API_GET_RACERS);

export const listHorses = () => {
    return axios.get(REST_API_GET_RACERS);
}
