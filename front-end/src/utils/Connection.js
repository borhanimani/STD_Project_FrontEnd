const urli = "http://localhost:3000";

export async function post(path, body) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // console.log(raw);
    // const result = await fetch(`${urli}${path}`, requestOptions);
    // return result

    const result = fetch(`${urli}${path}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return result
}

export function get(param) {
    console.log(param);
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const a = fetch(`http://localhost:3000/signin?username=${param.username}&password=${param.password}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    return a;
}