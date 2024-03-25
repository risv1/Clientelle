CREATE TABLE IF NOT EXISTS "requests" (
	"id" varchar PRIMARY KEY NOT NULL,
	"problem_details" text NOT NULL,
	"since_when" text NOT NULL,
	"customer_email" text NOT NULL,
	"customer_phone" text NOT NULL,
	"severity" text NOT NULL,
	"category" text NOT NULL
);
