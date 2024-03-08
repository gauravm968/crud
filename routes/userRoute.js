const express = require("express")

//methods import
const {home, createUser, getUsers, deleteUser, updateUser} = require("../controllers/userController.js")


const router = express.Router()

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getusers", getUsers)
router.put("/updateuser/:id", updateUser)
router.delete("/deleteuser/:id", deleteUser)

//diff b/w router.put & router.patch

module.exports = router;