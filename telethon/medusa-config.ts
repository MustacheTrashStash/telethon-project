import { loadEnv, defineConfig } from '@medusajs/framework/utils';
import { Modules } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || 'development', process.cwd());

const isDev = process.env.NODE_ENV === 'development';
const redisUrl = process.env.NODE_ENV === 'production' ? process.env.REDIS_URL : undefined;

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.NODE_ENV === 'production' ? process.env.REDIS_URL : undefined,
    workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },
  modules: [
    // Only include Redis modules in production
    ...(process.env.NODE_ENV === 'production' ? [
      {
        resolve: "@medusajs/medusa/cache-redis",
        options: {
          redisUrl: process.env.REDIS_URL,
        },
      },
      {
        resolve: "@medusajs/medusa/event-bus-redis",
        options: {
          redisUrl: process.env.REDIS_URL,
        },
      },
      {
        resolve: "@medusajs/medusa/workflow-engine-redis",
        options: {
          redis: {
            url: process.env.REDIS_URL,
          },
        },
      },
    ] : []),
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/payment-stripe",
            id: "stripe",
            options: {
              apiKey: process.env.STRIPE_API_KEY,
            },
          },
        ],
      },
    },
    {
      resolve: "@medusajs/medusa/auth",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/auth-emailpass",
            id: "emailpass",
          },
        ],
      },
    },
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-s3",
            id: "s3",
            options: {
              file_url: process.env.SPACE_URL,
              access_key_id: process.env.SPACE_ACCESS_KEY_ID,
              secret_access_key: process.env.SPACE_SECRET_ACCESS_KEY,
              region: process.env.SPACE_REGION,
              bucket: process.env.SPACE_BUCKET,
              endpoint: process.env.SPACE_ENDPOINT,
            },
          },
        ],
      },
    },
  ],
  plugins: [],
});