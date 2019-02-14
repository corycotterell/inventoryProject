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
      { item_name: 'Cinnamon Bark', item_number: 30030001, size: '5ml', retail_price: '$32.00', wholesale_price: '$24.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/cinnamon-bark-5ml.jpg' },
      { item_name: 'Clary Sage', item_number: 30420001, size: '15ml', retail_price: '$48.67', wholesale_price: '$36.50', item_picture_url: 'https://media.doterra.com/us/en/images/product/clary-sage-15ml.jpg' },
      { item_name: 'Clove', item_number: 30040001, size: '15ml', retail_price: '$21.33', wholesale_price: '$16.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/clove-15ml.jpg' },
      { item_name: 'Copaiba', item_number: 60202178, size: '15ml', retail_price: '$46.67', wholesale_price: '$35.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/clove-15ml.jpg' },
      { item_name: 'Coriander', item_number: 30780001, size: '15ml', retail_price: '$33.33', wholesale_price: '$25.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/coriander-15ml.jpg' },
      { item_name: 'Cypress', item_number: 30050001, size: '15ml', retail_price: '$20.67', wholesale_price: '$15.50', item_picture_url: 'https://media.doterra.com/us/en/images/product/cypress-15ml.jpg' },
      { item_name: 'Douglas Fir', item_number: 31590001, size: '5ml', retail_price: '$26.00', wholesale_price: '$19.50', item_picture_url: 'https://media.doterra.com/us/en/images/product/douglas-fir-5ml.jpg' },
      { item_name: 'Eucalyptus Radiata', item_number: 30060001, size: '15ml', retail_price: '$22.67', wholesale_price: '$17.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/eucalyptus-15ml.jpg' },
      { item_name: 'Fennel', item_number: 41290001, size: '15ml', retail_price: '$20.00', wholesale_price: '$15.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/fennel-15ml.jpg' },
      { item_name: 'dōTERRA Frankincense Touch', item_number: 60200224, size: '10ml 0.33oz', retail_price: '$60.67', wholesale_price: '$45.50', item_picture_url: 'https://media.doterra.com/us/en/images/product/frankincense-touch-10ml.jpg' },
      { item_name: 'Frankincense', item_number: 30070001, size: '15ml', retail_price: '$90.67', wholesale_price: '$68.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/frankincense-15ml.jpg' },
      { item_name: 'Geranium', item_number: 30090001, size: '15ml', retail_price: '$41.33', wholesale_price: '$31.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/geranium-15ml.jpg' },
      { item_name: 'Ginger', item_number: 31630001, size: '15ml', retail_price: '$54.67', wholesale_price: '$41.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/ginger-15ml.jpg' },
      { item_name: 'Grapefruit', item_number: 30100001, size: '15ml', retail_price: '$24.00', wholesale_price: '$18.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/grapefruit-15ml.jpg' },
      { item_name: 'Green Mandarin', item_number: 60205794, size: '15ml', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-15ml-60205794-green-mandarin-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3wxNDg1Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGFjL2hjZC8xMDU0NzIyMDIxNzg4Ni5qcGd8ZTNlZjlhYjFiZTE1M2Y3M2E3YzkwMDViMDg4NDk3NDE1YjU4MTc1MjlhNDFkYTI3YmRhZDk4ZjkzMDdjMDU5NA' },
      { item_name: 'Helichrysum', item_number: 30410001, size: '5ml', retail_price: '$93.33', wholesale_price: '$70.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/helichrysum-5ml.jpg' },
      { item_name: 'dōTERRA Jasmine Touch ', item_number: 60201812, size: '10ml', retail_price: '$56.00', wholesale_price: '$42.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60200224-touch-jasmine-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3wxMDcxMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGMwL2g1Ny85MjA4NjYxMzc3MDU0LmpwZ3xkMjdkOTc2YmM0YTE0YjUxM2Q5MjQ1MzBlNmI5YWVlMzM2Nzg4MjRmNWYyNmQxZjFlMjE1Y2YwNjQ0NDkyYzA5' },
      { item_name: 'Juniper Berry', item_number: 49290001, size: '5ml', retail_price: '$25.33', wholesale_price: '$19.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/juniper-berry-5ml.jpg' },
      { item_name: 'dōTERRA Lavender Touch', item_number: 60200225, size: '10mL, 0.33oz', retail_price: '$20.00', wholesale_price: '$15.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-lavender-10ml.jpg' },
      { item_name: 'Lavender', item_number: 30110001, size: '15 mL', retail_price: '$30.67', wholesale_price: '$23.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/lavender-15ml.jpg' },
      { item_name: 'Lemon', item_number: 30120001, size: '15 mL', retail_price: '$14.67', wholesale_price: '$11.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/lemon-15ml.jpg' },
      { item_name: 'Lemongrass', item_number: 30130001, size: '15 mL', retail_price: '$13.33', wholesale_price: '$10.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/lemongrass-15ml.jpg' },
      { item_name: 'Lime', item_number: 30870001, size: '15 mL', retail_price: '$17.33', wholesale_price: '$13.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/lime-15ml.jpg' },
      { item_name: 'Magnolia Touch', item_number: 60205420, size: '10 mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60205420-touch-magnolia-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3w5NDAxMHxpbWFnZS9qcGVnfGltYWdlcy9oOTEvaDk5LzEwNTQ3MjIxNDYzMDcwLmpwZ3w1MTMzMmRiNTgzNjdiNzdhODRlM2Q2MWVjZmQ2OWVmMWZmMmM1ZThlNTRkZWI3YTFiYTM1ZjYzOTRhNzA5NmM5' },
      { item_name: 'Marjoram', item_number: 30140001, size: '15 mL', retail_price: '$25.33', wholesale_price: '$19.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/marjoram-15ml.jpg' },
      { item_name: 'dōTERRA Melaleuca Touch', item_number: 60200226, size: '10 mL', retail_price: '$16.67', wholesale_price: '$12.50', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-melaleuca-10ml.jpg' },
      { item_name: 'Melaleuca', item_number: 30150001, size: '15 mL', retail_price: '$28.00', wholesale_price: '$21.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/melaleuca-tea-tree-15ml.jpg' },
      { item_name: 'Melissia', item_number: 30850001, size: '5 mL', retail_price: '$153.33', wholesale_price: '$115.00', item_picture_url: 'https://www.doterra.com/medias/9836263604254.jpg?context=bWFzdGVyfHJvb3R8OTc5NjF8aW1hZ2UvanBlZ3xoYWYvaDgwLzg4MDA3NzQzMjQyNTQuanBnfGZjN2FjOWJjZjQ5ZDdmM2VlODlkM2ZlYTEyMGNiMDc2ZDViNTEzZjU1MGFhOGY0MDc2MWVhZjZiMWViZjExZmI' },
      { item_name: 'Myrrh', item_number: 30160001, size: '15 mL', retail_price: '$78.67', wholesale_price: '$59.00', item_picture_url: 'https://www.doterra.com/medias/8967607615518.jpg?context=bWFzdGVyfHJvb3R8MTE1MDMxfGltYWdlL2pwZWd8aGFiL2g2My84ODAwNzcyNTg3NTUwLmpwZ3xlMzQ2YTA1OWUyZWJiOGM2MjQxODEwZDNkN2Y3N2IxNzg4NGIyNTY1ZjA5NGI0ZWIxMzgzOGNlOTJlNjZjNTRm' },
      { item_name: 'dōTERRA Neroli Touch', item_number: 60201817, size: '10 mL', retail_price: '$62.67', wholesale_price: '$47.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60200224-touch-neroli-us-english-web.jpg?context=bWFzdGVyfHJvb3R8MTA0OTY1fGltYWdlL2pwZWd8aDg2L2hkZC84ODQyNDkzNzIyNjU0LmpwZ3xmNGRlMmY5NzAxYjI3NGJjYTdhMTIzYmFiZWE2MmJhY2JmZTgyMmE4MTdiNjZmMWU1ZmJlNTFiNWYyNGJjZThk' },
      { item_name: 'dōTERRA Oregano Touch', item_number: 60200227, size: '10mL, 0.33oz', retail_price: '$19.33', wholesale_price: '$14.50', item_picture_url: 'https://www.doterra.com/medias/8967608139806.jpg?context=bWFzdGVyfHJvb3R8OTAwMTZ8aW1hZ2UvanBlZ3xoMzYvaDUyLzg4MDA3NzI5NDc5OTguanBnfDEwY2Y1N2UyZjNiMzViNjJmNDIxZmFmNTFiMmFlMDc5MzAyZmNjMTQ2ZWY5N2Q4NGI4ZWNhZDYxNWU1YmY3OGM' },
      { item_name: 'Oregano', item_number: 30180001, size: '15mL', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://www.doterra.com/medias/8967607877662.jpg?context=bWFzdGVyfHJvb3R8MTE5NzUwfGltYWdlL2pwZWd8aDJhL2gwOC84ODAwNzcyODE2OTI2LmpwZ3wzOWFmYmQyZDMzNWQxNGI2YTRjNGIzZjA1MGQwNzYzZTJiMDJmYmEwOGNiYzQyOWUzNTcwOWIxYzhjODNmMGMw' },
      { item_name: 'Patchouli', item_number: 30890001, size: '15mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'https://www.doterra.com/medias/8967608401950.jpg?context=bWFzdGVyfHJvb3R8MTE3MTQ0fGltYWdlL2pwZWd8aDI0L2gzZi84ODAwNzcyOTE1MjMwLmpwZ3xmZDI2NzU0MzAyM2E2YWY0MjI0NzY2NTU4NjJmMTM1ZjFiYTk5YTlmMTZlYzlmMGMzODkyYzczNzUyMGE4YjIy' },
      { item_name: 'dōTERRA Peppermint Touch', item_number: 60200228, size: '10mL, 0.33oz', retail_price: '$19.33', wholesale_price: '$14.50', item_picture_url: 'https://www.doterra.com/medias/8967609188382.jpg?context=bWFzdGVyfHJvb3R8OTg0NDl8aW1hZ2UvanBlZ3xoMGMvaDY4Lzg4MDA3NzMyMTAxNDIuanBnfDVmM2JhZjM0NjIzOWJhMDY4OGIxOGQyOTQ5YmUzNGI4YzEyYzY3ZWU4Y2ZiOTk5MWFmYmY2OWMxOTA0MzJjYzE' },
      { item_name: 'Peppermint', item_number: 30190001, size: '15mL', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://www.doterra.com/medias/8967608926238.jpg?context=bWFzdGVyfHJvb3R8MTI1NzQyfGltYWdlL2pwZWd8aDBiL2hkMS84ODAwNzczMTc3Mzc0LmpwZ3xiZDE3YjQ3NTEwNTUzYzgxYmM3ZGQ3M2M3MzFiNGE1ZDZjOGJkNWRmMzVhYzIwYzIwYmQ5MzQxN2RkZjdkMGRm' },
      { item_name: 'Peppermint Beadlet', item_number: 31570001, size: '15mL', retail_price: '$16.67', wholesale_price: '$12.50', item_picture_url: 'http://media.doterra.com/us/en/images/product/peppermint-beadlet.jpg' },
      { item_name: 'Petitgrain', item_number: 49520001, size: '15mL', retail_price: '$33.33', wholesale_price: '$25.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/petitgrain-15ml.jpg' },
      { item_name: 'Pink Pepper', item_number: 60207016, size: '5mL', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-5ml-60207016-pink-pepper-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3wxMDcxMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk0L2g1Mi8xMDU0NzIxNjM4NDAzMC5qcGd8Nzk4OTMxZDE4ZjVjM2QyYzAzNjcwM2Y2MzJlZDc5MDNhYmE0MWMzNzFiZjIzNjViZWIxMzlmMjYxZDkyOGVlZg' },
      { item_name: 'Roman Chamomile', item_number: 30800001, size: '5mL', retail_price: '$60.00', wholesale_price: '$45.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/roman-chamomile-5ml.jpg' },
      { item_name: 'dōTERRA Rose Touch', item_number: 60201813, size: '10mL', retail_price: '$93.33', wholesale_price: '$70.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60200224-touch-rose-us-english-web.jpg?context=bWFzdGVyfHJvb3R8OTIzOTZ8aW1hZ2UvanBlZ3xoMGEvaDMzLzg4NDI0NTkyMTc5NTAuanBnfDZjYzcwOTY0MTllNmEzZWE1NjQ4Y2M3MTA1ZmVkNDNjYmNmNzI4MTk5MDk3NTEzMDgxZjc4ZWJjMmMxM2M5OWY' },
      { item_name: 'Rosemary', item_number: 30200001, size: '15mL', retail_price: '$21.33', wholesale_price: '$16.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/rosemary-15ml.jpg' },
      { item_name: 'Sandalwood (Indian)', item_number: 30210001, size: '5mL', retail_price: '$93.33', wholesale_price: '$70.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/sandalwood-5ml.jpg' },
      { item_name: 'Sandalwood (Hawaiian)', item_number: 41860001, size: '5mL', retail_price: '$93.33', wholesale_price: '$70.00', item_picture_url: 'https://media.doterra.com/us/en/images/product/sandalwood-hawaiian-5ml.jpg' },
      { item_name: 'Siberian Fur', item_number: 60203125, size: '15mL', retail_price: '$26.67', wholesale_price: '$20.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-15ml-60203125-siberian-fir-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3wxMzYxNTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2g4Yi84ODQyMzAyNTIxMzc0LmpwZ3w5OTNkMjZiYTU5MTUwNjY4OGNhMDc4ZTU3ZWIzODJmYWQ1MzI3NmZlMjhlYTk2ZjQ0ZmMxMTNlZTRmNGFiMzgw' },
      { item_name: 'Spearmint', item_number: 31610001, size: '15mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/spearmint-15ml.jpg' },
      { item_name: 'Spikenard', item_number: 49510001, size: '5mL', retail_price: '$66.00', wholesale_price: '$49.50', item_picture_url: 'http://media.doterra.com/us/en/images/product/spikenard-5ml.jpg' },
      { item_name: 'Tangerine', item_number: 49440001, size: '15mL', retail_price: '$20.00', wholesale_price: '$15.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/tangerine-15ml.jpg' },
      { item_name: 'Thyme', item_number: 30220001, size: '15mL', retail_price: '$39.33', wholesale_price: '$29.50', item_picture_url: 'http://media.doterra.com/us/en/images/product/thyme-15ml.jpg' },
      { item_name: 'Turmeric', item_number: 60206973, size: '15mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-15ml-60206736-turmeric-us-english-web.jpg?context=bWFzdGVyfGltYWdlc3wxNDk2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hiMC8xMDU0NzIyMTk1NDU5MC5qcGd8YWFlMDM5NDJmOGMxMzdiNmFjNmM4OWY3MzNjZGJiMWQ5ZmM5MGZmYTM2ODAwMDI1MmI2Y2RjOTVhNzk1ZTkxMw' },
      { item_name: 'Vetiver', item_number: 30430001, size: '15mL', retail_price: '$54.67', wholesale_price: '$41.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/vetiver-15ml.jpg' },
      { item_name: 'Wild Orange', item_number: 30170001, size: '15mL', retail_price: '$13.33', wholesale_price: '$10.00', item_picture_url: 'https://www.doterra.com/medias/8967611777054.jpg?context=bWFzdGVyfHJvb3R8MTI1MjU5fGltYWdlL2pwZWd8aDRmL2gxMy84ODAwNzczNzM0NDMwLmpwZ3w0ZWVkNDU3ZWI1ZjAzODZmOTljMWViYjI0NDlhZTAyMmM2NmNlNGQ0MzViNjJhMGQyMDU4MTIzZjMyOGY4OThk' },
      { item_name: 'Vetiver', item_number: 30430001, size: '15mL', retail_price: '$54.67', wholesale_price: '$41.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/vetiver-15ml.jpg' },
      { item_name: 'Wintergreen (Nepalese)', item_number: 31620001, size: '15mL', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/wintergreen-15ml.jpg' },
      { item_name: 'Ylang Ylang', item_number: 30240001, size: '15mL', retail_price: '$49.33', wholesale_price: '$37.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/ylang-ylang-15ml.jpg' },
      { item_name: 'Yarrow Pom', item_number: 60207652, size: '30mL', retail_price: '$126.67', wholesale_price: '$95.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-yarrow-pom-delayed-shipping-us-en-web.jpg?context=bWFzdGVyfGltYWdlc3wxNDY4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDU1L2g3OC8xMjAzNjE2NDYxNjIyMi5qcGd8ZjUwMDUyNDRiN2UyZjgyZjMyOTRhNWUzZWIxNzdmYTIyZjI2MTAwYzYxNjJlYjQ0NWQ5OTY5YWIyNDAwZjMzMg' },
      { item_name: 'AromaTouch®', item_number: 31200001, size: '15mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/aromatouch-15ml.jpg' },
      { item_name: 'dōTERRA Balance®', item_number: 31010001, size: '15mL', retail_price: '$28.00', wholesale_price: '$21.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-balance-15ml.jpg' },
      { item_name: 'Brave™', item_number: 60206618, size: '10 mL Roll-on', retail_price: '$28.00', wholesale_price: '$21.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60206618-kids-brave-us-english-web.jpg?context=bWFzdGVyfHJvb3R8MTAxNTI5fGltYWdlL2pwZWd8aGE3L2hiMS8xMDU4Mzk0NDM2NDA2Mi5qcGd8Y2Q0NTE2Y2MwMzQ0MmExZTA2ZmYwZjkyZjc0OTEwYzBmNzg3MjkyNzEzY2FjNDg1NDI1ZDc1ZGYxYzBmNWJiYg' },
      { item_name: 'dōTERRA Breathe®', item_number: 60200190, size: '15mL, .50oz', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-breathe-15ml.jpg' },
      { item_name: 'dōTERRA Breathe® Touch', item_number: 60200192, size: '10mL, 0.33oz', retail_price: '$18.67', wholesale_price: '$14.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-breathe-10ml.jpg' },
      { item_name: 'Calmer™', item_number: 60206632, size: '10 mL Roll-on', retail_price: '$25.33', wholesale_price: '$19.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-10ml-60206632-kids-calmer-us-english-web.jpg?context=bWFzdGVyfHJvb3R8ODk5NDh8aW1hZ2UvanBlZ3xoNmYvaDA0LzEwNTgzOTQ0ODU1NTgyLmpwZ3xkYzZlN2IxZmVlOTNmYjlmNWNmYzAzYTY4OWQxY2Y3MzFhMmE2MjRiODVkZjA1NWVjYTg2YzdlYzZkOGZkYjU0' },
      { item_name: 'dōTERRA Cheer®', item_number: 31720001, size: '5 mL', retail_price: '$33.33', wholesale_price: '$25.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-cheer-5ml.jpg' },
      { item_name: 'dōTERRA Cheer® Touch', item_number: 60200146, size: '10 mL', retail_price: '$21.67', wholesale_price: '$16.25', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-cheer-10ml.jpg' },
      { item_name: 'Citrus Bliss®', item_number: 31020001, size: '15 mL', retail_price: '$24.00', wholesale_price: '$18.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/citrus-bliss-15ml.jpg' },
      { item_name: 'ClaryCalm®', item_number: 49480001, size: '10mL, 0.33oz', retail_price: '$36.00', wholesale_price: '$27.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/clarycalm-10ml.jpg' },
      { item_name: 'dōTERRA Console®', item_number: 31730001, size: '5 mL', retail_price: '$49.33', wholesale_price: '$37.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-console-5ml.jpg' },
      { item_name: 'dōTERRA Console® Touch', item_number: 60200147, size: '10 mL', retail_price: '$32.00', wholesale_price: '$24.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-console-10ml.jpg' },
      { item_name: 'DDR Prime®', item_number: 60207092, size: '15 mL', retail_price: '$37.33', wholesale_price: '$28.00', item_picture_url: 'https://www.doterra.com/medias/2x3-566x819-ddr-prime-15-ml-us-en-web.jpg?context=bWFzdGVyfGltYWdlc3wxNDY5NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2hlZS8xMTU1MDQ4MDc5MzYzMC5qcGd8NWU1YjdmNjBkZjE5Y2FjZTVmNzgzZGIzNjViYzM0OGNmNDcxMThkZWU5OWEwODRlZGIxNjk0MWM3ZDhlNDNhYQ' },
      { item_name: 'DDR Prime® Softgels', item_number: 34410001, size: '60 softgels', retail_price: '$73.33', wholesale_price: '$55.00', item_picture_url: 'https://www.doterra.com/medias/9839471198238.jpg?context=bWFzdGVyfHJvb3R8MTMxNjk3fGltYWdlL2pwZWd8aDNkL2gxZi84ODAwNzc5NTk5OTAyLmpwZ3xkOGNkOTM1ZjY1MTc2MTY2ZWJiZjUwNDAwMmVlNGE1NDE1NDA2NzNlY2E3MDVlNDA5NjhkMmNhMmE1N2UxNTgz' },
      { item_name: 'Deep Blue®', item_number: 60200143, size: '5mL, .16oz', retail_price: '$44.00', wholesale_price: '$33.00', item_picture_url: 'https://www.doterra.com/medias/8967445643294.jpg?context=bWFzdGVyfHJvb3R8MTExODM4fGltYWdlL2pwZWd8aDgyL2g1Zi84ODAwNzk1NDkyMzgyLmpwZ3w3ZWY4ZTYwODliNjk1MDcxZjg0YzA4M2FjMWJhMmRhMzI4YzMwYzJjMzAwMDZhOWE0M2JkZWVhMTE0MjA0OGRm' },
      { item_name: 'Deep Blue® roll-on', item_number: 60200144, size: '10mL, 0.33oz', retail_price: '$78.67', wholesale_price: '$59.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/deep-blue-10ml-roll-on.jpg' },
      { item_name: 'dōTERRA Deep Blue® Touch', item_number: 60200145, size: '10mL, 0.33oz', retail_price: '$57.33', wholesale_price: '$43.00', item_picture_url: 'https://www.doterra.com/medias/9839353430046.jpg?context=bWFzdGVyfHJvb3R8MTAzODI1fGltYWdlL2pwZWd8aDA4L2gyMi84ODAwNzc1MTEwNjg2LmpwZ3wyM2M0ZDc3ZWE3ZDFjZWUzODcxNjk4ZTllZTQ0MTJhZDYxNDNmNzcwM2UwNDExYjQ0MzQzMTdmZjI5NWZhNWNk' },
      { item_name: 'DigestZen®', item_number: 31030001, size: '15 mL', retail_price: '$44.00', wholesale_price: '$33.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/digestzen-15ml.jpg' },
      { item_name: 'DigestZen® Softgels', item_number: 35430001, size: '60 softgels', retail_price: '$26.00', wholesale_price: '$19.50', item_picture_url: 'http://media.doterra.com/us/en/images/product/digestzen-softgels.jpg' },
      { item_name: 'dōTERRA DigestZen® Touch', item_number: 60200223, size: '10mL, 0.33oz', retail_price: '$29.33', wholesale_price: '$22.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-digestzen-10ml.jpg' },
      { item_name: 'Elevation', item_number: 31040001, size: '15 mL', retail_price: '$57.33', wholesale_price: '$43.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/elevation-15ml.jpg' },
      { item_name: 'dōTERRA Forgive®', item_number: 31750001, size: '5 mL', retail_price: '$26.67', wholesale_price: '$20.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-forgive-5ml.jpg' },
      { item_name: 'dōTERRA Forgive® Touch', item_number: 60200148, size: '10 mL', retail_price: '$17.33', wholesale_price: '$13.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-forgive-10ml.jpg' },
      { item_name: 'dōTERRA® Hope Touch', item_number: 60200879, size: '10 mL, 0.33 oz', retail_price: '$20.00', wholesale_price: '$20.00', item_picture_url: 'http://media.doterra.com/us/en/images/product/doterra-touch-hope-10ml.jpg' },




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
