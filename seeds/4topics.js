
exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return knex('topics').insert([{
        id: 1,
        topic_id: 1,
        topic:"inspiration"
      }, {
        id: 2,
        topic_id: 2,
        topic:"admiration"
      }, {
        id: 3,
        topic_id: 3,
        topic:"resources"
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('topics_id_seq', (SELECT MAX(id) FROM topics));"
      );
    });
};
