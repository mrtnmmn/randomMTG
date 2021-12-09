import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch';

const app = express()

app.use(cors())

function fetchAPI() {
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(response => response.json())
}

async function awaitApi() {
    const resultFetch = await fetch('https://api.magicthegathering.io/v1/cards')
    return resultFetch.json()
}

function findName(cardName) {
    return fetch('https://api.magicthegathering.io/v1/cards?name=' + cardName)
    .then(response => response.json())
    .then(data => console.log(data));
}

function findRandom() {
    fetch('https://api.scryfall.com/cards/random')
    .then(response => response.json())
    .then(data => console.log(data));
}

app.listen(4000, () => {
    console.log('Servidor encendido')
})

app.get('/random', async (req,res) => {
    let response = await fetch('https://api.scryfall.com/cards/random') 
    let data = await response.json()
    res.json(data)
})