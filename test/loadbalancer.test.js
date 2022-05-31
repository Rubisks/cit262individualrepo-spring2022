import fetch from 'node-fetch';
import assert from 'assert';

it ('should get Hello', async ()=>{
    const responce  = await fetch('http://35.243.132.37');
    const text = await responce.text();
    assert.equal(text,"Hello");
})