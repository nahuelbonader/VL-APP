import axios from "axios";
// import { IP } from "../../env";

const API = axios.create({
  baseURL: `https://vl-api.herokuapp.com/api/`,
});

export default API;
