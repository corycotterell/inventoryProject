'use strict'
const Oil = use('App/Models/Oil')
const OilUser = use('App/Models/OilUser')

class OilController {
    async getAllProducts({response,request}){
        let oil = await Oil.all()
        response.send(oil)
    }
    async getOilByItemNumber({request,response}){
        let number = request.input('item_number')
        let oil = await Oil.findBy("item_number", number)
        response.send(oil)
    }
    async addOilToInventory({request,response,auth}){
        let oilToAddToInventory = request.input("oil")
        let user = await auth.getUser()
        let userId = user.id
        let oil = await OilUser.create({
            user_id: userId,
            // oil_id: oilToAddToInventory
        })
        response.send(oil)
    }
    async getUserInventory({request,response,auth}){
        let user = await auth.getUser()
        return user
    }
}

module.exports = OilController
