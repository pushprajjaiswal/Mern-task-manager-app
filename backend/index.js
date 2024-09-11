const bodyParser = require('body-parser');
const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('hello from the server');
});

// app.use(cors());
// app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})