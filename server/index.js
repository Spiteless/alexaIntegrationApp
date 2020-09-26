require('dotenv').confing()
const express = require("express")
const massive = require("massive")
const session = require("express-session")

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// controllers

const app = express();

app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxage: 1000 * 60 * 24 * 15, // 5 days
        },
    })
);

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then((db) => {
        console.log("Database connected")
    })
    .catch((err => console.log(`Database error: ${err}`)))

//endpoints

// app.post('/auth/login', auth.login)
// app.post('/auth/register', auth.register)
// app.get('/auth/logout', auth.logout)
// app.get('/auth/user', auth.getUser)

app.listen(SERVER_PORT, () => console.log(`Conncted to server on ${SERVER_PORT}`))