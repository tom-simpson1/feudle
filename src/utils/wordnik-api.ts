import axios from "axios";

const WordnikApi = axios.create({ baseURL: "https://api.wordnik.com/v4/" });

export default WordnikApi;
