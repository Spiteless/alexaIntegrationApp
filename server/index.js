require("dotenv").config({path: __dirname + '/../.env'})
const express = require("express")
const session = require("express-session")
const cors = require('cors')
const auth = require('./Controllers/auth')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// controllers
const app = express();

app.use(express.json());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
//     next();
//  });
// app.use(cors());
app.use(cors());

app.use(
    session({
        secret: SESSION_SECRET,
        cookie: {
            maxage: 1000 * 60 * 24 * 15, // 5 days
        },
    })
);

//endpoints
console.log("SERVER RUNNING")
app.get('/', function(req, res, next) {
    res.redirect('http://localhost:3000');
})
app.get('/oauthlogin', auth.oauthlogin)
app.get('/login', auth.login)
app.get('/foo', () => console.log('made a get to foo'));
// app.post('/auth/', auth.login)
// app.post('/auth/register', auth.register)
// app.get('/auth/logout', auth.logout)
// app.get('/auth/user', auth.getUser)

app.listen(SERVER_PORT, () => console.log(`Conncted to server on ${SERVER_PORT}`))