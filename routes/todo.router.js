const router = require("express").Router();
const ToDoController = require('../controller/todo.controller')

router.get('/get',ToDoController.getToDoList)



module.exports = router;