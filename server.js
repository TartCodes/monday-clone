const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')


const app = express()
app.use(cors())
app.use(express.json())

const url = "https://3dc22a4b-f11d-46e2-991e-831c6b54643b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks"
const token = "AstraCS:XZLiqiZnxAZTEfvhdMditINu:96b9751058c68ee01ee3ed2ed39f19e4c059d44d6c3c7f921522856b21313eee"

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }
    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }

})

app.listen(PORT, () => console.log('server is running on PORT ' + PORT))