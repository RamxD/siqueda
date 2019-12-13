'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tareas
 */
const Tareas = use('App/Models/Tarea')

class TareaController {
  /**
   * Show a list of all tareas.
   * GET tareas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tareas = await Tareas.query().with('lista').fetch()
    return tareas
  }

  /**
   * Render a form to be used for creating a new tarea.
   * GET tareas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tarea.
   * POST tareas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const tarea = await Tareas.create(request.all())
      return response.status(201).send({message:{message:'tarea creada'}, Tarea: tarea});
    } catch (error) {
      return response.send(error)
    }
  }

  /**
   * Display a single tarea.
   * GET tareas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const tarea = await Tareas.findBy('id', params.id)
    return tarea
  }

  /**
   * Render a form to update an existing tarea.
   * GET tareas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tarea details.
   * PUT or PATCH tareas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const tarea = await Tareas.findBy('id', params.id)
      tarea.merge(request.all())
      tarea.save()
      return response.send(tarea)
    } catch (error) {
      return response.send(error)
    }
  }

  /**
   * Delete a tarea with id.
   * DELETE tareas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const tarea = await Tareas.findBy('id', params.id)
    await tarea.delete()

    return response.send({message:"Tarea eliminada correctamente"}, tarea)
  }
}

module.exports = TareaController
