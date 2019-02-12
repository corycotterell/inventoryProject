'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
Factory.blueprint('App/Models/Oil', async (data) => {
    return {
        item_name: data.item_name,
        item_number: data.item_number,
        size: data.size,
        retail_price: data.retail_price,
        wholesale_price: data.wholesale_price,
        item_picture_url: data.item_picture_url
    }

})