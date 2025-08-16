import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/race/getwinner/4'

export const listRaces = () => axios.get(REST_API_BASE_URL);
