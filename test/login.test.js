import {login} from '../utils/login.js';

it ('should get login token', async ()=>{
    const loginRequest = {
        userName:"callme@byui.edu",
        password:"M@ckB00k",
    }
    await login(loginRequest);
    
})