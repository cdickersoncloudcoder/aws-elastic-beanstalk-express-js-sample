const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello World! I am chad I am woking on a project Create Continuous Delivery Pipeline'));
=======
app.get('/', (req, res) => res.send('Hello World! I am chad '));
>>>>>>> c646d20793c5c5fa0403838a5f588ab34c292522

app.listen(port);
console.log(`App running on http://localhost:${port}`);
