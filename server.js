const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let profile ={
    'ali':{
    'Nick-name': 'ALI',
    'age': 23,
    'status': 'Awesome!!'},

    'temiloluwa':{
        'Nick-name': "Pika Pika",
        'age': 16,
        'status': 'mostly a stubborn goat'
    },

    'unknown':{
        'name': 'unknown',

    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
 app.get('/api/profile', (request, response) =>{
    response.json(profile)
 })
app.get('/api/profile/:newName',(request,response)=>{
    const user = request.params.newName
    console.log(user)
    if(profile[user]){
        response.json(profile[user])
    }else{
        response.json(profile['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`server be runnin on port ${PORT}`);
})