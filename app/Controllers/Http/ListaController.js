'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with listas
 */
const Listas = use('App/Models/Lista')
class ListaController {
  /**
   * Show a list of all listas.
   * GET listas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const listas = await Listas.query().with('user').fetch()
    return listas
  }

  /**
   * Render a form to be used for creating a new lista.
   * GET listas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new lista.
   * POST listas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const lista = await Listas.create(request.all())
      return response.status(201).send({message:{message:'Lista creada'}, List: lista});
    } catch (error) {
      return response.send(error)
    }
  }

  /**
   * Display a single lista.
   * GET listas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const lista = await Listas.findBy('id', params.id)
    return lista 
  }

  async showTareas ({ params, request, response, view }) {
    const lista = await Listas.findBy('id', params.id)
    const tareas = await lista.tareas().fetch()
    return tareas 
  }

  /**
   * Render a form to update an existing lista.
   * GET listas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update lista details.
   * PUT or PATCH listas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const lista = await Listas.findBy('id', params.id)
      lista.merge(request.all())
      lista.save()
      return response.send(lista)
    } catch (error) {
      return response.send(error)
    }
  }

  /**
   * Delete a lista with id.
   * DELETE listas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const lista = await Listas.findBy('id', params.id)
    await lista.delete()

    return response.send({message:"Lista eliminada correctamente"}, lista)
  }
}

module.exports = ListaController
