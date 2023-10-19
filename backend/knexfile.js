module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'railway',
      host: 'containers-us-west-132.railway.app',
      port: 7252,
      user: 'postgres',
      password:'ESfx4Wkb00EZZ7c9chiH'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  // ... outras configurações como produção, teste, etc., se necessário
};
