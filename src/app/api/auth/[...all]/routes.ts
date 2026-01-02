import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from '@/lib/auth';

/**
 * Better-Auth Catch-All Route Handler
 *
 * The [...all] folder name creates a Next.js catch-all route that captures
 * any path under /api/auth/*. Better-auth uses this to handle all auth endpoints:
 *
 * Core routes:
 *   POST /api/auth/sign-up/email    - Register with email/password
 *   POST /api/auth/sign-in/email    - Login with email/password
 *   POST /api/auth/sign-out         - Logout (clears session)
 *   GET  /api/auth/session          - Get current user session
 *
 * OAuth routes (when configured):
 *   GET  /api/auth/sign-in/:provider   - Initiate OAuth flow
 *   GET  /api/auth/callback/:provider  - OAuth callback handler
 *
 * Additional routes depend on plugins enabled in auth config.
 */
export const { POST, GET } = toNextJsHandler(auth);
