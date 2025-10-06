const TodoModel = require('../model/todo.model');

class TodoServices{
    static async createTodo({userId, title, desc}){
        try {
            const createTodo = new TodoModel({userId, title, desc});
            return await createTodo.save();
        } catch (error) {
            throw error;
        }
    }


    static async getTodoData(userId){
        try {
            const todoData = await TodoModel.find(userId);
            return todoData;
        } catch (error) {
            throw error;
        }
    }


    static async deleteTodo(id){
    
        const deleted = await TodoModel.findOneAndDelete({_id: id});
        return deleted;
    
    }

}


module.exports = TodoServices;