const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middlewaree/authMiddleware");
const roleMiddleware = require("./middlewaree/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "username cannot be empty").notEmpty(),
    check(
      "password",
      "The password length must be between 8 and 14 characters inclusive"
    ).isLength({ min: 8, max: 14 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["admin"]), controller.getUsers);

module.exports = router;
