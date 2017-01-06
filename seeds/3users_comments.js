
exports.seed = function(knex, Promise) {
  return knex('users_comments').del()
    .then(() => {
      return knex('users_comments').insert([{
        id: 1,
        user_id: 1,
        post_id: 1,
        comment_content:"Help me Obi Wan Kanobi you're my only hope ...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 3,
        post_id: 3,
        comment_content:"Fly casual ...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 2,
        post_id: 2,
        comment_content:"If I don’t make it back, you’re the only hope for the Alliance ...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_comments_id_seq', (SELECT MAX(id) FROM users_comments));"
      );
    });
};
