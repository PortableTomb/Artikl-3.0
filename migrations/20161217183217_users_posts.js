
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_posts', (table) => {
   table.increments();
   table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
   table.string('post_title').notNullable().defaultTo('');
   table.string('post_content').notNullable().defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_posts');
};
