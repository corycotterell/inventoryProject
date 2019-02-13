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
      { item_name: 'Arborvitae', item_number: 49360001, size: '5ml', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/arborvitae-5ml.jpg' },
      { item_name: 'Basil', item_number: 30010001, size: '15ml', retail_price: '$32.00', wholesale_price: '$24.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/basil-15ml.jpg' },
      { item_name: 'Bergamot', item_number: 30790001, size: '15ml', retail_price: '$40.00', wholesale_price: '$30.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/bergamot-15ml.jpg' },
      { item_name: 'Black Pepper', item_number: 41040001, size: '5ml', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/black-pepper-5ml.jpg' },
      { item_name: 'Blue Tansy', item_number: 60203383, size: '5ml', retail_price: '$113.33', wholesale_price: '$85.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/blue-tansy-5-ml.jpg' },
      { item_name: 'Cardamom', item_number: 49350001, size: '5ml', retail_price: '$34.67', wholesale_price: '$26.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/cardamom-5ml.jpg' },
      { item_name: 'Cassia', item_number: 30020001, size: '15ml', retail_price: '$25.33', wholesale_price: '$19.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/cassia-15ml.jpg' },
      { item_name: 'Cedarwood', item_number: 49300001, size: '15ml', retail_price: '$17.33', wholesale_price: '$13.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/cedarwood-15ml.jpg' },
      { item_name: 'Cilantro', item_number: 41850001, size: '15ml', retail_price: '$34.67', wholesale_price: '$26.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/cilantro-15ml.jpg' },



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
