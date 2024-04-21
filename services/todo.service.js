
const vehicles = require("../models/todo.model");


class ToDoService{
    static async getVehicles(){
        const todoList = await vehicles.find();
        return todoList;
   }
}
module.exports = ToDoService;