const express = require('express');
const app = express();

const port = 3000;

app.get('/api', (req, res)=> {
    res.json({message: 'API backend'});
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}!`);
})