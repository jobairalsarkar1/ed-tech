export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    session: {
      // Allow admin cookies over non-HTTPS connections
      sameSite: 'None', // Required for cross-site cookies in browsers
      secure: false,    // Disable HTTPS-only restriction (for Railway preview)
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
});
