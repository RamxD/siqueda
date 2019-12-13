'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListaSchema extends Schema {
  up () {
    this.create('listas', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name', 80).notNullable()
      table.date('fecha').notNullable()
      table.time('hora').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('listas')
  }
}

module.exports = ListaSchema
