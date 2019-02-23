'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OilSchema extends Schema {
  up () {
    this.create('oils', (table) => {
      table.increments()
      table.string('item_name',100).unique()
      table.integer('item_number',15)
      table.string('size', 50)
      table.string('retail_price',50)
      table.string('wholesale_price',50)
      table.string('item_picture_url',500)
      table.timestamps()
    })
  }

  down () {
    this.drop('oils')
  }
}

module.exports = OilSchema
