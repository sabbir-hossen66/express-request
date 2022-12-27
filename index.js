const express = require('express');
app = express();

app.get('/', (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    res.send(firstName + ' ' + lastName)
})


app.get('/header', (req, res) => {
    const firstName = req.header('firstName');
    const lastName = req.header('lastName');
    res.send(firstName + ' ' + lastName)

})



app.listen(7000, function () {
    console.log('express request is ok');
})