'use strict'
const Oil = use('App/Models/Oil')
class OilController {
    async getOil({response,request}){
        let oil = await Oil.all()
        response.send(oil)
    }
}

module.exports = OilController
