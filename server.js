const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const birthdayPerson = {
    'kevin':{
        'month': 'July',
        'day': '4th',
    },
    'brad':{
        'month': 'September',
        'day': '21st',
    },
    'ryan':{
        'month': 'December',
        'day': '12th',
    },
    'unknown':{
        'month': 'unknown',
        'day': 'unknown'
    }
    
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:userQueryParameter', (request,response)=>{
    const birthdayName = request.params.userQueryParameter.toLowerCase()
    if(birthdayPerson[birthdayName]){
        response.json(birthdayPerson[birthdayName])
    }else{
        response.json(birthdayPerson['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})