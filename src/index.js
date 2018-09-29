const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('front-end/dist/front-end'));

app.get('/users', (req, res) => {
    res.json({
        name: 'Eldon'
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
