import type { Config } from "drizzle-kit";
import { config } from "dotenv";

config();

export default {
  schema: "./lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DB_URL!,
  },
} satisfies Config;