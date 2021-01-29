// const bcrypt = require('bcrypt');

// module.exports = {
//     login: async (req, res) => {
//         console.log('Fired Login', req.body)
//         const db = req.app.get('db');
//         const {email, password} = req.body;
//         const [ user ] = await db.auth_check_user(email);
//         if(!user){
//             console.log("returned 401")
//             return res.status(401).send('Email or password incorrect');
//         } else {
//            const authenticated = bcrypt.compareSync(password, user.password);
//            if(authenticated){
//                req.session.user = {
//                    userId: user.user_id,
//                    email: user.email,
//                 //    user: user
//                }
//                res.status(200).send(req.session.user)
//            } else {
//                console.log("returned 401")
//                res.status(401).send('Email or password incorrect')
//            }
//         }
//     },
//     //check if user exists in db
//     //if not, create user and login
//     register: async (req, res) => {
//         console.log('Fired Register', req.body)
//         const db = req.app.get('db');
//         const {email, password} = req.body;
//         const existingUser = await db.auth_check_user(email);
//         if(existingUser[0]){
//             return res.status(409).send('User already exists')
//         }
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(password, salt)
//         const [newUser] = await db.auth_register_user([email, hash])
//         req.session.user = {
//             userId: newUser.user_id,
//             email: newUser.email,
//         }
//         res.status(200).send(req.session.user)
//     },
//     //on logout, destroy session object
//     logout: (req, res) => {
//         console.log('Fired Logout')
//         req.session.destroy();
//         res.sendStatus(200);
//     },
//     //if user is still logged in, pass that to frontend
//     getUser: (req, res) => {
//         console.log('Fired GetUser', req.session.user.firstName)
//         if(req.session.user){
//             // console.log("getUser", req.session.user)
//             res.status(200).send(req.session.user)
//         } else {
//             res.sendStatus(404)
//         }
//     }
// }

const CLIENT_ID = encodeURI('37539307676-o628fhhnhnbqe93njrp9ma27of0q14vp.apps.googleusercontent.com')
const CLIENT_SECRET = encodeURI(process.env.CLIENT_SECRET)  // Read from a file or environmental variable in a real app
const SCOPE = encodeURI('https://www.googleapis.com/auth/userinfo.email')
const REDIRECT_URI = encodeURI('http://localhost:3000/login')
const URL = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code'
const RANDOM_STATE = "foo" //change me later

// auth_uri = ('https://accounts.google.com/o/oauth2/v2/auth?response_type=code'
//         '&client_id={}&redirect_uri={}&scope={}').format(CLIENT_ID, REDIRECT_URI, SCOPE)


module.exports = {
    oauthlogin: async (req, res) => {
        console.log("hit oauthlogin")
        // const authUri = `${URL}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${RANDOM_STATE}`
        const authUri = `http://www.google.com`
        res.redirect(authUri)
        //send a request to google
        //response from google will be URL to redirect user to
        //rediret user to URL
    },
    login: async (req, res) => {
        console.log(req)
        res.redirect('/')

        //if SUCCESS
            //receive success response
            //return response token to google
            //google returns authentication
            //redirect to dashboard logged in
        //if FAIL 
            //dashboard with error not authenticated
    }
}