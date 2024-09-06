import router from "./user.routes";

router.route("/").get(fetchEvents)
router.route("/").get(fetchEventsByID)

//export default router