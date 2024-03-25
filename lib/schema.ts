import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
  password: text("password").notNull(),
  role: text("role").notNull(),
});

export const requests = pgTable("requests", {
  id: varchar("id").primaryKey(),
  problem_details: text("problem_details").notNull(),
  since_when: text("since_when").notNull(),
  customer_email: text("customer_email").notNull(),
  customer_phone: text("customer_phone").notNull(),
  severity: text("severity").notNull(),
  category: text("category").notNull(),
});