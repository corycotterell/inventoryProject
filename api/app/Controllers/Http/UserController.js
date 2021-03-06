'use strict'
const User = use('App/Models/User')

class UserController {
    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password");
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let accessToken = await auth.generate(user)
                return response.json({ "message": "success", "access_token": accessToken })
            }

        }
        catch (e) {
            return e
        }
    }
    async getUser({request,response,auth}){
        try{
            const user = await auth.getUser()
            response.send({message:"success",user})
        }catch(e){
            response.send(e)
        }
    }
    async register({ request, response }) {
        try{
        const user = await User.create({

            first_name: request.input("first_name"),
            last_name: request.input("last_name"),
            email: request.input("email"),
            password: request.input("password"),
        })
        response.send("sucess")
    }catch(e){
        response.send(e)
    }
    }

}

module.exports = UserController
