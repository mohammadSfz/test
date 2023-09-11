// api.js
import Axios from "axios";


export const Api = Axios.create({
    baseURL:'https://reqres.in/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

Api.interceptors.request.use(
    (config) => {
        return config;
    },
    function (err) {
        // handle error
        return Promise.reject(err);
    }
);

Api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        return err
    }
);


// export const Api = api;