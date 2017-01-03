
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_posts', (table) => {
   table.increments();
   table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
   table.integer('topic_id');
   table.integer('votes').defaultTo(0);
   table.boolean('likes').defaultTo(false);
   table.string('post_title').defaultTo('');
   table.string('post_url').defaultTo('');
   table.string('post_image').defaultTo('');
   table.string('post_text').defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_posts');
};
