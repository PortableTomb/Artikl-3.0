exports.seed = function(knex) {
  return knex('users_follows').del()
    .then(() => {
      return knex('users_follows').insert([{
        id: 1,
        user_id: 2,
        follow_id: 1,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users_follows));"
      );
    });
};
