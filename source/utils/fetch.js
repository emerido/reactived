import 'isomorphic-fetch';

export function post(url) {
    return function (fields) {

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(fields)
        }).then(x => x.json());
    }
}