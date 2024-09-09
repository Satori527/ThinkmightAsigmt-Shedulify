import { Router } from "express";
import {
    getCurrentUser,
    getUserAvailability,
    helloTest,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAvailability
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
helloTest
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/users/availability").get(verifyJWT,getUserAvailability)
router.route("/users/update-availability").post(verifyJWT, updateAvailability)


//router.route("/users").get(fetchUsers)
//router.route("/users/:id").get(fetchUserById)
//router.route("/users/:id/availability").get(getUserAvailability)

//router.route("/").get(helloTest)




//router.route("/").










/*
router.get("/",async (req, res) => {
    const page = parseInt(req.query.page)
})
*/
export default router