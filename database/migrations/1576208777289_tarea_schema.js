'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {
      table.increments()
      table.integer('lista_id').unsigned().references('id').inTable('listas')
      table.string('count', 80).notNullable()
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tareas')
  }
}

module.exports = TareaSchema
