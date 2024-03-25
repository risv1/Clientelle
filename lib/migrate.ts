import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const DB_URL = process.env.NEXT_PUBLIC_DB_URL || "";

const sql = postgres(DB_URL, { max: 1 });
const db = drizzle(sql);

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("Migrations ran successfully");
  process.exit(0);
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();