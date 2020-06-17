//
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

//
export class NodeFetchHelper {
    static get = (url, headers, callback) => {
        var status;
        fetch(url, {
            method: GET,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            });
    }

    static post = (url, headers, body, callback) => {
        fetch(url, {
            method: POST,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            });
    }

    static put = (url, headers, body, callback) => {
        fetch(url, {
            method: PUT,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                ...body
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            });
    }

    static deletee = (url, headers, callback) => {
        fetch(url, {
            method: DELETE,
            headers: new Headers({
                ...headers,
                "Content-Type": "application/json",
            })
        }).then(res => Promise.all([res.status, res.json()]))
            .then(([status, jsonData]) => {
                console.log(jsonData);
                console.log(status);
                callback(status, jsonData)
            });
    }
}
