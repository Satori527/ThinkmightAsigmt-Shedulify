import { Router } from "express";
import { helloTest } from "../controllers/user.controller.js";
helloTest
const router = Router()

router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/users").get(fetchUsers)
router.route("/users/:id").get(fetchUserById)
router.route("/users/:id/availability").get(getUserAvailability)

router.route("/").get(helloTest)
//router.route("/:id").get(fetchUserById)
//router.route("/search/:name").get(fetchUsersByName)
//router.route("/filter/availability/:available").get(filterUsersByAvailability)




//router.route("/").










/*
router.get("/",async (req, res) => {
    const page = parseInt(req.query.page)
})
*/
export default router