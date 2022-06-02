import fetch from "node-fetch";

const login = async ({userName, password}) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({userName,  password}),
        headers:{'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.243.132.37 ',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export {login};