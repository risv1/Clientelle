import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
  password: text("password").notNull(),
});
