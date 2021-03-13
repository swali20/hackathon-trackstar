const router = require("express").Router();
const User = require("../db/models/User");
module.exports = router;

router.get("/login", async (req, res, next) => {
  try {
    const scopes = "user-read-recently-played";
    const redirect_uri = "https://localhost:1234";
    res.redirect(
      "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=442c255450ab441a82f1761a46b6ba48" +
        scopes +
        redirect_uri
    );
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.login(user, (err) => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});
