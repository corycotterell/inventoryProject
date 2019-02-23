'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OilUserSchema extends Schema {
  up () {
    this.create('oil_user', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer("oil_id").unsigned().references("id").inTable("oils")
    })
  }

  down () {
    this.drop('oil_user')
  }
}

module.exports = OilUserSchema
