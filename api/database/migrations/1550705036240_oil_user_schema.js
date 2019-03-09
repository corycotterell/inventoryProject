'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OilUserSchema extends Schema {
  up () {
    this.create('oil_users', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer("oil_id").unsigned().references("id").inTable("oils")
      table.integer("count").unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('oil_users')
  }
}

module.exports = OilUserSchema
