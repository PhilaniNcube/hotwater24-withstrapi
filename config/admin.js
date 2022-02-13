module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce31fd512ebfc3b4984f46fe6710262f'),
  },
});
