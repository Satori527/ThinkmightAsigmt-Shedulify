import { Router } from "express";
import { helloTest, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
helloTest
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,  logoutUser)
//router.route("/users").get(fetchUsers)
//router.route("/users/:id").get(fetchUserById)
//router.route("/users/:id/availability").get(getUserAvailability)

router.route("/").get(helloTest)




//router.route("/").










/*
router.get("/",async (req, res) => {
    const page = parseInt(req.query.page)
})
*/
export default router