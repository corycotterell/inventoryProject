'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/getUserInventory', "OilController.getUserInventory")
Route.get('/getAllProducts', "OilController.getAllProducts")
Route.get('/getOilByItemNumber', 'OilController.getOilByItemNumber')
Route.post('/addOilToInventory', "OilController.addOilToInventory")

Route.post('/loginUser', "UserController.login")
Route.get('/getUser', 'UserController.getUser').middleware('auth')
Route.post('/registerUser', "UserController.register")