import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/race/getwinner/4'
const REST_API_SIM_RACE = 'http://localhost:8080/race/simulaterace/4'
const REST_API_GET_WINNER = 'http://localhost:8080/race/getwinner/4'
const REST_API_CREATE_RACE = 'http://localhost:8080/race/createrace/ak'

export const listRaces = () => axios.get(REST_API_BASE_URL);
export const getWinner = () => axios.get(REST_API_GET_WINNER);
export const createRace = () => axios.post(REST_API_CREATE_RACE);
