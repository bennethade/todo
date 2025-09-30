const UserModel = require('../model/user.model');

class UserService{
    static async registerUser(email, password){
        try {
            const createUser = new UserModel({email, password});
            return await createUser.save();
        } catch (err) {
            if (err.code === 11000) {
                throw new Error('Email already exists');
            }
            throw err;
        }
    }
}

module.exports = UserService;