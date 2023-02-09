import axios from "axios";

const BASE_URL = "http://localhost:5000/api"

// We will be gettin this token from postman when we login
const TOKEN = "";

// We will be using the publicRequest to fetch data.
export const publicRequest = axios.create({
    baseURL: BASE_URL, 
});

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: { token: `Bearer ${TOKEN}` }
});
