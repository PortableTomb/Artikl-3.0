
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        username: 'd.carson',
        email: 'davidcarson@raygun.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',//youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        username: 'r.eames',
        email: 'rayeames@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',//youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 3,
        username: '',
        email: 'j.meada@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',//youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
    },{
        id: 4,
        username: 'j.zhuo@facebook.com',
        email: 'zstardust@gmail.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',//youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
  },{
        id: 5,
        username: 'testuser',
        email: 'test@email.com',
        hashed_password: '$2a$12$MfjikQlJBfoYU2QZ/TGjt.jwVkH0jEFHIELoRLEROlyuxKibIY5p.',//youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
