
exports.seed = function(knex, Promise) {
  return knex('users_posts').del()
    .then(() => {
      return knex('users_posts').insert([{
        id: 1,
        user_id: 1,
        topic_id: 2,
        votes: 0,
        post_title:"Moonage Daydream",
        post_url:"https://s-media-cache-ak0.pinimg.com/736x/76/95/37/769537bbe2649011c507da365fd9df78.jpg",
        post_image:"",
        post_text:"I'm an alligator, I'm a mama-papa coming for you, I'm the space invader, I'll be a rock 'n' rollin' bitch for you...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 2,
        topic_id: 3,
        votes: 0,
        post_title:"Search and Destroy",
        post_url:"http://peteralanlloyd.com/wp-content/uploads/2013/05/Iggy-Pop-tumblr.jpg",
        post_image:"",
        post_text:"I'm a street walking cheetah with a heart full of napalm, I'm a runaway son of the nuclear A-bomb...",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_posts_id_seq', (SELECT MAX(id) FROM users_posts));"
      );
    });
};
