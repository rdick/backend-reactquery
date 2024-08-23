const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
]; // Predefined array of user data

app.get('/users', (req, res) => {
    setTimeout(() => {
        res.json(users);
    }, 1000); // Delay of 1000 milliseconds (1 second)
});

app.post('/users', (req, res) => {
    const userData = req.body;
    // Assign a new ID to the user
    userData.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(userData);
    res.status(201).json(userData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
