import { Router } from "express";
import { createEvent } from "../controllers/event.controller.js";
import {
    helloTest
} from "../controllers/user.controller.js";
helloTest
const router = Router()

//router.route("/").post(fetchEvents)
// router.route("/").get(fetchEventsByID)
router.route("/create").post(createEvent)

export default router