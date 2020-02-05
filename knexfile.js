// create this file with: knex init be sure you are in the root of your repo! or
// use --knexfile ... don't do what i've done before lol (create knexfile.js in
// the ./data folder... made all sortsa prolems.).

module.exports = {


  development: {  
    client: 'sqlite3',

    connection: {
      filename: './data/car-dealer.db3'
    },

    useNullAsDefault: true,

    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}