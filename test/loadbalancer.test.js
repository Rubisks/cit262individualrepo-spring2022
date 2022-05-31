import fetch from 'node-fetch';
import assert from 'assert';

it ('should get Hello', async ()=>{
    const answer = await fetch('http://35.243.132.37');
    assert.equal(answer,"Hello");
    
})