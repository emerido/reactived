export const FETCH_TOKEN = 'FETCH_TOKEN';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';

export const fetchToken = () => ({
    type : FETCH_TOKEN
});

export const requestToken = (email, password) => ({
    type: REQUEST_TOKEN,
    payload: {
        email,
        password
    }
});