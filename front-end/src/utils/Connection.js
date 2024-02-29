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

export function get(path, param) {
    console.log(param);
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const a = fetch(`${urli}${path}?username=${param.username}&password=${param.password}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    return a;
}

export async function postMenuItem(path, image, info) {
    console.log('here');
    const formdata = new FormData();
    formdata.append("img", image, `${info.imageName}`);
    formdata.append("info", JSON.stringify(info));

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    try {
        const result = fetch(`${urli}${path}`, requestOptions)
            .then((response) => response.text())
            .catch((error) => console.error(error));

        return result;
    } catch (error) {
        return error
    }

}

async function postMenuItemText(path, body) {

    console.log('body', body);
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

    const result = fetch(`${urli}${path}/text`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return result
}