'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Oil extends Model {
    // oil(){
    //     return this
    //     .belongsToMany('App/Models/User')
    //     .pivotTable("user_inventory")
    // }
}

module.exports = Oil
