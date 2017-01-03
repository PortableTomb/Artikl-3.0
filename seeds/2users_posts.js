
exports.seed = function(knex, Promise) {
  return knex('users_posts').del()
    .then(() => {
      return knex('users_posts').insert([{
        id: 1,
        user_id: 1,
        topic_id: 2,
        votes: 0,
        likes: false,
        post_title:"Dancing Meets Creative Coders",
        post_url:"http://thecreatorsproject.vice.com/blog/dancehackday-mix-coding-dancing",
        post_image:"https://thecreatorsproject-images.vice.com/content-images/contentimage/no-slug/096244e93b19b4b6ac3908a74c208cab.jpg",
        post_text:"What do you get when 70 dancers and creative coders meet for a hackathon? Here's What Happens When Dancing Meets Creative Coders.",
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 2,
      user_id: 2,
      topic_id: 3,
      votes: 0,
      likes: false,
      post_url:"https://medium.com/facebook-design/giving-back-to-the-design-community-2c0b4cbb091f#.7ztxmbt1ba",
      post_title:"Giving Back to the Design Community",
      post_image:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/Hgv/image/mcnMwsRaNP33TeYC_n4wNbFYSgw.png",
      post_text:"sample a few popular design tools to compare where they are at with their adaptive layout features",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 3,
      user_id: 3,
      topic_id: 1,
      votes: 0,
      likes: false,
      post_title:"Design Disruptors",
      post_url:"https://www.designdisruptors.com/",
      post_image:"https://phreshideasanddesigns.files.wordpress.com/2015/10/design-disruptors-wp.png",
      post_text:"Our film is designed to be a series of snapshots that demystify how design choices made by few can affect billions of people around the world.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 4,
      user_id: 2,
      topic_id: 3,
      votes: 0,
      likes: false,
      post_title:"Dribble Meetups",
      post_url:"https://dribbble.com/meetups",
      post_image:"https://d13yacurqjgara.cloudfront.net/users/6019/screenshots/1723912/seattle_dribbble_meetup-_091214.png",
      post_text:"Dribbble Meetups are fun! Getting designers together is a guaranteed good time. You’ll be able to mingle and meet other designers.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 5,
      user_id: 1,
      topic_id: 1,
      votes: 0,
      likes: false,
      post_title:"British Fashion",
      post_url:"https://www.google.com/culturalinstitute/beta/u/0/project/british-fashion",
      post_image:"https://i.ytimg.com/vi/zegkHODNVvY/hqdefault.jpg",
      post_text:"Mathematical formulas are used to place the artworks in a 3D environment, where you can choose to visualise what a cultural big bang might look like, or travel through the sea of artworks decade by decade.",
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
