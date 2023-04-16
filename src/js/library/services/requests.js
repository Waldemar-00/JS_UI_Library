import $ from '../core';
$.prototype.get = async function (url = 'https://jsonplaceholder.typicode.com/users', format = 'json') {
    const result = await fetch(url); 
    if (!result.ok) {
        throw new Error(`Response status: ${result.status}`);
    }
    switch (format) {
        case 'json': return await result.json();
        case 'text': return await result.text();
        case 'blob': return await result.blob();
    }
};
$.prototype.post = async function (data, url = 'https://jsonplaceholder.typicode.com/posts', format = 'json') {
    const dataObject = {};
    data.forEach((value, index) => {
        dataObject[index] = value;
    });
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(dataObject),
    });
    switch (format) {
    case 'json': return await result.json();
    case 'text': return await result.text();
    case 'blob': return await result.blob();
}
};