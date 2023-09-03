import express, { request } from 'express'
import { response } from 'express';
const app = express()

//POST - send data to server
//GET - get data from server
//PUT - update data on server
//DELETE - delete data on server
//PATCH - update data on server (partial update)

const users = [
    {id:1, name: "Zymante"},
    {id:2, name: "Neringa"},
    {id:3, name: "Viola"},
    {id:4, name: "Kristina"},
    {id:5, name: "Vaida"}
]


const port = 3000;
app.get('/', (request, response) => {
    response.send('Response from server (MAIN ROUTE)')
})


app.get('/users', (request, response) => {
    response.json(users)
})

app.post('/create-user', (request, response) => {
    const requestFromUser = request.body
    console.log(requestFromUser)
    users.push(requestFromUser)
    response.status(201).json(users)
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
    
})