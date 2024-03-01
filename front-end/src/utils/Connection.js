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

    try {
        const result = fetch(`${urli}${path}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        return error
    }
}

export function get(path, param) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const a = fetch(`${urli}${path}?username=${param.username}&password=${param.password}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        return a;
    } catch (error) {
        return error
    }
}

export async function postMenuItem(path, image, info) {
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

export async function postMenuCategory(path, body) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const result = fetch(`${urli}${path}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        console.log(error);
        return error
    }
}

export function getCategories(path) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const a = fetch(`${urli}${path}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        return a;
    } catch (error) {
        return error
    }
}


export function getItems(path, catId) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const a = fetch(`${urli}${path}/${catId}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        return a;
    } catch (error) {
        return error
    }
}

export async function deleteItem(path, id) {
    const raw = "";

    var requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
    };

    try {
        const result = fetch(`${urli}${path}/${id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        return error
    }
}

export async function deleteCategory(path, id) {
    const raw = "";

    var requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
    };

    try {
        const result = fetch(`${urli}${path}/${id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        return error
    }
}

export function getOne(path, itemId) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const a = fetch(`${urli}${path}/${itemId}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        return a;
    } catch (error) {
        return error
    }
}

export async function updateItem(path, body, id) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const result = fetch(`${urli}${path}/${id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        return error
    }
}

export function getTabItemsMenu(path, catId) {
    console.log('ff');
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const a = fetch(`${urli}${path}/${catId}`, requestOptions)
            .then((response) => response.json())
            .catch((error) => console.error(error));
        return a;
    } catch (error) {
        return error
    }
}

export async function buyOrder(path, body) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(body);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const result = fetch(`${urli}${path}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        return result
    } catch (error) {
        return error
    }
}
