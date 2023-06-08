import { Router } from 'express';
import session from 'express-session';
import { doLogin, registerUser } from '../helpers/user-helper.js';
var router = Router();

const verifyLogIn = (req, res, next) => {
  console.log(req)
  if (req.session.loggedIn) {
    next()// if the user has account then continue with next step
  }
  else {
    console.log("redirecting to login page")
    req.session.user = { name: "guest", isValid: false }
    req.session.loggedIn = false
    console.log(req.session.user)
    res.json(req.session.user)
  }
}
/* GET users listing. */
router.post('/', verifyLogIn, function (req, res, next) {

  // console.log(req.session)
  // // req.session.destroy()
  // if (!req.session) {
  //   // returns undefined value when created session for that client expired 
  //   req.session = {
  //     user: "guest",
  //     loggedIn: false
  //   }
  //   // res.json([{user: "guest"}])
  // }
  //   // req.session.destroy()
  // console.log("user is => ")
  // console.log(user)
  // res.send('guest user');
});
router.post('/register', async (req, res) => {
  console.log("user register request")
  // console.log(req.body)
  await registerUser(req.body)
    .then(response => {
      console.log(response)
      res.json(response)
      // res.json({ error: "Failed to register user, insertion failed" })
    })
})
router.post('/login', async (req, res) => {
  console.log("login request")
  console.log(req.body)
  await doLogin(req.body)
    .then(response => {
      console.log(response)
      if (response.status) {
        // after sucessfull login a session is created for that users
        req.session.loggedIn = true
        //saving user data
        req.session.user = response.user // user returned from doLogin() fn's response obj  
        // redirecting user to homepage instead of rendering new page for user
        console.log(req)
        res.json(response)
      }
      else {
        // returning error
        res.json({ error: response.error })
      }
    })
    .catch(err => {
      console.log(err)
      res.json({ error: "Server internal error" })
    })
})

// perform below operation only if user has session  
router.post("/cart", verifyLogIn, async (req, res) => {
  console.log("show cart request")
  // let products = await userHelpers.getCartProducts(req.session.user._id)
  // console.log(products.quantity)
  // res.render("users/cart", { products, user: req.session.user})
})
// user logout
router.post('/logout', (req, res, next) => {
  req.session.destroy()
  res.redirect('/')
})
export default router;
