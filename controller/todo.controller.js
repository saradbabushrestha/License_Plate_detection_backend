const ToDoService = require('../services/todo.service');

exports.getToDoList =  async (req,res,next)=>{
    try {
        let todoData = await ToDoService.getVehicles();
        res.json({status: true,success:todoData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
