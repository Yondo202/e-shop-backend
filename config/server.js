module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url:'https://19e8ebcb75e7.ngrok.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c7d3b60c062853cbc91c856e278b67a'),
    },
  },
});
