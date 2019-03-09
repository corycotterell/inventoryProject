'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OilUser extends Model {
    
    oils() {
        return this
        .hasMany('App/Models/Oil')
        .pivotTable("oil_users")
      }

}

module.exports = OilUser
