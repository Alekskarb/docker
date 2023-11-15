const express = require('express');
const app = express();

app.get('/', (req, res) => {
    req.send('')
})

app.listen(3000, () => {
    console.log('Ready!')
})
