'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarea extends Model {

    lista(){
        return this.belongsTo('App/Models/Lista')
    }
}

module.exports = Tarea
