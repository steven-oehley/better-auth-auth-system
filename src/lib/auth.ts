import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import prisma from '@/lib/prisma';

/**
 * Better-Auth Configuration
 *
 * This is the central configuration for all authentication in the app.
 * The `auth` object is used by:
 *   - API route handler (api/auth/[...all]/routes.ts) - handles auth endpoints
 *   - Auth client (lib/auth-client.ts) - client-side auth functions
 *
 * Configuration options you can add here:
 *
 * 1. DATABASE (required)
 *    - Connects better-auth to your database via Prisma
 *    - Handles: users, sessions, accounts, verification tokens
 *
 * 2. EMAIL & PASSWORD (optional)
 *    emailAndPassword: { enabled: true, requireEmailVerification: true }
 *
 * 3. OAUTH PROVIDERS (optional)
 *    socialProviders: {
 *      google: { clientId: "...", clientSecret: "..." },
 *      github: { clientId: "...", clientSecret: "..." },
 *    }
 *
 * 4. PLUGINS (optional) - extend functionality
 *    plugins: [twoFactor(), magicLink(), passkey()]
 *
 * 5. SESSION CONFIG (optional)
 *    session: { expiresIn: 60 * 60 * 24 * 7 } // 7 days
 *
 * 6. CALLBACKS (optional) - hook into auth events
 *    callbacks: { onUserCreated: (user) => {...} }
 *
 * Docs: https://better-auth.com/docs
 */
export const auth = betterAuth({
  // Database adapter - connects better-auth to Prisma/PostgreSQL
  // Uses the shared prisma instance from lib/prisma.ts (with Neon adapter)
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  // Add your auth configuration below:
  // emailAndPassword: { enabled: true },
  // socialProviders: { google: {...}, github: {...} },
  // plugins: [],
});
