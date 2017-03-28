import { push } from 'react-router-redux';

export const LOADING_START = 'LOADING_START';
export const LOADING_COMPLETED = 'LOADING_COMPLETED';

export const go = (path, options = {}) => push({
    path,
    state: options.state,
    search: options.search
});


export const loading = () => ({
   type: LOADING_START
});
export const loadingCompleted = () => ({
    type: LOADING_COMPLETED
});