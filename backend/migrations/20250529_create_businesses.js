export async function up(knex) {
  await knex.schema.createTable("businesses", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name").notNullable();
    table.string("subdomain").notNullable().unique();
    table.string("description").notNullable();
    table.string("logo_url");
    table.uuid("template_id").references("id").inTable("templates");
    table.string("layout").notNullable().defaultTo("stacked");
    table.string("theme_name").notNullable();

    // Contact Information
    table.jsonb("contact").notNullable().defaultTo("{}");

    // SEO Settings
    table.jsonb("seo").notNullable().defaultTo("{}");

    // Content Sections
    table.jsonb("sections").notNullable().defaultTo("[]");

    // Services and Testimonials
    table.jsonb("services").notNullable().defaultTo("[]");
    table.jsonb("testimonials").notNullable().defaultTo("[]");

    // Business Hours and Settings
    table.jsonb("business_hours").defaultTo("{}");
    table.jsonb("settings").defaultTo("{}");

    // Status and Timestamps
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });

  // Create indexes for better query performance
  await knex.schema.raw(`
    CREATE INDEX businesses_subdomain_idx ON businesses (subdomain);
    CREATE INDEX businesses_template_id_idx ON businesses (template_id);
  `);

  return Promise.resolve();
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("businesses");
  return Promise.resolve();
}
