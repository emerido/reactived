import {LOADING_COMPLETED, LOADING_START} from "../actions";

export function loaded(state = false, action) {
    return state;
}

export function loading(state = true, action) {
    switch (action.type) {
        case LOADING_START:
            return true;
        case LOADING_COMPLETED:
            return false;
    }
    return state;
}