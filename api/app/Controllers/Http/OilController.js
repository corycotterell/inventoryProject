'use strict'
const Oil = use('App/Models/Oil')

class OilController {
    async getOil({response,request}){
        let oilToFind = request.input("oil")
        let oil = await Oil.findBy("item_name",oilToFind)
        response.send(oil)
    }
    async getOilByItemNumber({request,response}){
        let number = request.input('item_number')
        let oil = await Oil.findBy("item_number", number)
        response.send(oil)
    }
}

module.exports = OilController
