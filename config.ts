import 'dotenv/config';
import { z } from 'zod';
export const env = z.object({
  NODE_ENV: z.enum(['development','test','production']).default('development'), PORT: z.coerce.number().default(3001), DATABASE_URL: z.string().min(1), JWT_SECRET: z.string().min(32), WEB_ORIGIN: z.string().url(), MIN_WITHDRAWAL_BRL: z.coerce.number().default(20), REWARD_PER_VIDEO_CENTS: z.coerce.number().default(10), MAX_DAILY_REWARD_CENTS: z.coerce.number().default(500), WATCH_REQUIRED_PERCENT: z.coerce.number().default(80), WATCH_MIN_SECONDS: z.coerce.number().default(20), PAYMENT_MODE: z.enum(['SANDBOX','PRODUCTION']).default('SANDBOX'), COMPANY_CNPJ: z.string().optional(), COMPANY_LEGAL_NAME: z.string().optional(), PAYOUT_PROVIDER: z.string().default('generic'), PAYOUT_API_URL: z.string().url().optional(), PAYOUT_API_TOKEN: z.string().optional(), WEBHOOK_SECRET: z.string().min(16)
}).parse(process.env);
