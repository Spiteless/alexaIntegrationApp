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