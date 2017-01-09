
exports.seed = function(knex, Promise) {
  return knex('users_posts').del()
    .then(() => {
      return knex('users_posts').insert([{
        id: 1,
        user_id: 1,
        topic_id: 1,
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
      id: 7,
      user_id: 4,
      topic_id: 2,
      votes: 0,
      likes: false,
      post_title:"Taiwanese animator Min Liu",
      post_url:"http://www.min-liu.com/",
      post_image:"https://upload-assets.vice.com/files/2017/01/04/1483557810052615.gif",
      post_text:"A series of 100 clever, mesmerizing, and occasionally fucked up GIFs by Taiwanese animator Min Liu. A 100-day Instagram challenge to make a GIF every 24 hours.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 8,
      user_id: 1,
      topic_id: 3,
      votes: 0,
      likes: false,
      post_title:"PonyFoo",
      post_url:"https://ponyfoo.com/",
      post_image:"https://ponyfoo.com/img/mjavascript/practical-es6.b2b35ad8.png",
      post_text:"Pony Foo Weekly – a newsletter about the open web by Nicolás Bevacqua.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 9,
      user_id: 4,
      topic_id: 1,
      votes: 0,
      likes: false,
      post_title:"Codrops Digest",
      post_url:"https://tympanus.net/codrops/",
      post_image:"https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2016/12/RevealerEffect_800x600.png",
      post_text:"Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques and new possibilities.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 6,
      user_id: 2,
      topic_id: 1,
      votes: 0,
      likes: false,
      post_title:"Norgram",
      post_url:"http://norgram.co/",
      post_image:"https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/009/663/medium.jpg",
      post_text:"Nordic Creative Talent Award winners: Mathias Høst Normark is combining creativity with technology.",
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
      id: 5,
      user_id: 3,
      topic_id: 3,
      votes: 0,
      likes: false,
      post_title:"Duo layout with CSS3 and Transitions",
      post_url:"http://webdesignerwall.com/tutorials/tutorial-duo-layout-css3-animations-transitions-pt-2",
      post_image:"http://webdesignerwall.com/wp-content/uploads/2017/01/splitscreen-overlay-1.jpg",
      post_text:"How to build a split-screen website layout using CSS flexbox and viewport units. Clicking on one side or the other navigates further into the site without a page load.",
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
