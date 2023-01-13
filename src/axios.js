import axios from "axios";

const instance = axios.create({
    baseURL: '...'   // API  cloud funtion url
});

export default instance;