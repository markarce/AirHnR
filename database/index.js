const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url + '/airhnr'
});
const bookshelf = require('bookshelf')(knex);

knex.schema.createTable('users', table => {
  table.increments('id').primary();
  table.string('username');
  table.string('firstName');
  table.string('lastName');
  table.timestamps(true, true);
  // table.foreign('paper_id')
  //   .references('papers.id');
}).then();

// console.log(knex)


// var User = bookshelf.Model.extend({
//   tableName: 'users',
//   posts: function () {
//     return this.hasMany(Posts);
//   }
// });

// var Posts = bookshelf.Model.extend({
//   tableName: 'messages',
//   tags: function () {
//     return this.belongsToMany(Tag);
//   }
// });

// var Tag = bookshelf.Model.extend({
//   tableName: 'tags'
// })

// User.where('id', 1).fetch({ withRelated: ['posts.tags'] }).then(function (user) {
//   console.log(user.related('posts').toJSON());
// }).catch(function (err) {
//   console.error(err);
// });