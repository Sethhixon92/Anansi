const router = require("express").Router();

router.get("/", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect("/dashboard");
    //     return;
    // }
  res.render("hero"); 
});

// when I type localhost:3001/login
router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
  res.render("login");
});

// when I type localhost:3001/signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
