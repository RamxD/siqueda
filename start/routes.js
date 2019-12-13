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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('api/v1/users', 'UserController').apiOnly();

Route.post('api/v1/login', 'UserController.login');

Route.resource('api/v1/list', 'ListaController').apiOnly();
Route.resource('api/v1/tarea', 'TareaController').apiOnly();
Route.get('api/v1/lista/tarea/:id', 'ListaController.showTareas');