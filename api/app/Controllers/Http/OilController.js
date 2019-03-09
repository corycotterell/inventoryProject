'use strict'
const Oil = use('App/Models/Oil')
const OilUser = use('App/Models/OilUser')
const Database = use('Database')

class OilController {
    async getAllProducts({ response, request }) {
        let oil = await Oil.all()
        response.send(oil)
    }

    async getOilByItemNumber({ request, response }) {
        let number = request.input('item_number')
        let oil = await Oil.findBy("item_number", number)
        response.send(oil)
    }

    async addOilToInventory({ request, response, auth }) {
        try {
            let oilToAddToInventory = request.input("oil")
            let user = await auth.getUser()
            let userId = user.id
            let count = request.input('count')
            let checkForAddedInventory = await Database.table("oil_users").where("user_id", userId).where("oil_id",oilToAddToInventory)
            if (checkForAddedInventory.length > 0) {
                response.send("You have already added this Oil")
            } else {
                let oil = await OilUser.create({
                    user_id: userId,
                    oil_id: oilToAddToInventory,
                    count: count
                })
                response.send("Oil was added To Inventory")
            }
        } catch (e) {
            response.send(e)
        }
    }
    async getUserInventory({ request, response, auth }) {
        let user = await auth.getUser()
        let userId = user.id
        let oil = await Database.query().table("oil_users").where("user_id", userId)
        for(var i=0; i < oil.length; i++){
            let data = await Oil.findBy("id",oil[i].oil_id)
            console.log(oil[i].data = data)
        }
        response.send(oil)
    }
}

module.exports = OilController
