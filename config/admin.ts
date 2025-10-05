export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    session: {
      sameSite: 'None',
      secure: true,
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://ed-tech-production.up.railway.app/admin'),
});
