import axios from "axios";
const { 
    REACT_APP_ADMIN_URL, 
    REACT_APP_API_RESPONSE 
} = process.env;

export const admin = axios.create({
    baseURL:REACT_APP_ADMIN_URL,
    responseType: REACT_APP_API_RESPONSE
});

