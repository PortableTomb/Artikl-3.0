exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', (table) => {
    table.increments();
    table.integer('topic_id');
    table.string('topic').notNullable();
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('topics');
};
