module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '192.168.88.78'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'eshop'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'RelativitY@9'),
        charset: "utf8mb4",
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {
        charset: "utf8mb4"
      }
    },
  },
});