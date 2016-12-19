exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_comments', (table) => {
   table.increments();
   table.integer('user_id')
     .notNullable()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .index();
   table.integer('post_id')
     .notNullable()
     .references('id')
     .inTable('users_posts')
     .onDelete('CASCADE')
     .index();
   table.string('comment_content').notNullable().defaultTo('');
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_comments');
};
