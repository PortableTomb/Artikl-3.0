
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_follows', (table) => {
      table.increments();
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
      table.integer('follow_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_follows');
};
