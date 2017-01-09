
exports.seed = function(knex, Promise) {
  return knex('users_comments').del()
    .then(() => {
      return knex('users_comments').insert([{
        id: 1,
        user_id: 1,
        post_id: 1,
        comment_content:"Awesome Idea. Would love to see this live ...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 3,
        post_id: 2,
        comment_content:"Nice article Han ...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 3,
        post_id: 3,
        comment_content:"I saw this film during startup week. Really inspiring.",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 5,
        user_id: 1,
        post_id: 5,
        comment_content:"This is the new new.",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 6,
        user_id: 4,
        post_id: 6,
        comment_content:"Norgram is doing so interesting work.",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 7,
        user_id: 1,
        post_id: 7,
        comment_content:"LUV Min Liu! Magical stuff",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 8,
        user_id: 3,
        post_id: 8,
        comment_content:"Who doesn't love Pony Foo?",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      },  {
        id: 9,
        user_id: 2,
        post_id: 9,
        comment_content:"I look forward to seeing each weeks Codrops. A must read.",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 4,
        user_id: 3,
        post_id: 4,
        comment_content:"I'd love to connect at a Dribble meetup in Seattle.",
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
