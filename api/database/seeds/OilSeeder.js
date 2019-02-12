'use strict'

/*
|--------------------------------------------------------------------------
| OilSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Oil = use('App/Models/Oil')

class OilSeeder {
  async run() {
    const oilArray = [
      { item_name: 'Arborvitae', item_number: 49360001, size: '5ml', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg'},
      {item_name: 'Basil', item_number: 30010001, size: '15ml', retail_price: '$32.00', wholesale_price: '$24.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/basil-15ml.jpg'}
      
    ]
    for (var i = 0; i < oilArray.length; i++) {
      console.log(oilArray)
      await Oil.create(
        {
          item_name: oilArray[i].item_name,
          item_number: oilArray[i].item_number,
          size: oilArray[i].size,
          retail_price: oilArray[i].retail_price,
          wholesale_price: oilArray[i].wholesale_price,
          item_picture_url: oilArray[i].item_picture_url
        })
    }
  }
}

module.exports = OilSeeder
