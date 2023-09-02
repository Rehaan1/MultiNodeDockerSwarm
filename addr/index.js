const express = require('express')
const { networkInterfaces } = require('os');

const nets = networkInterfaces();


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) => {
    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
            if (net.family === familyV4Value && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }

    res.status(200).json({
        "Addr":results
    })

})

app.listen(5001, ()=>{
    console.log("App Listening on Port 5001")
})