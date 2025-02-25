const express = require('express');
const app = express();
const port = 3000;

const users = {
    1 : {id: 1,name: 'salah',email:'emmmmm@gmail.com'},
    2: {id: 3,name:'click',email:'lll@gmail.com'},
};

app.use(express.static('public'));

app.get('/profile/:id', (req,rep) => {
    const userID = req.params.id;
    const user = users[userID];
        if(user) {
            rep.send(`<h1>Profile Page</h1><p>Name: ${user.name}</p><p>Email: ${user.email}</p>`);
        
        } else {
            rep.status(404).send("User not found");
        }

});
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to IDOR Vulnerable App</h1>
        <p>Try accessing /profile/1, /profile/2, etc.</p>
    `);
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
