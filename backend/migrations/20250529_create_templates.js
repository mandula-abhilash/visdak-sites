export async function up(knex) {
  await knex.schema.createTable("templates", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name").notNullable();
    table.string("niche").notNullable();
    table.string("description").notNullable();
    table.jsonb("sections").notNullable().defaultTo("[]");
    table.jsonb("fields").notNullable().defaultTo("{}");
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });

  await knex.schema.createTable("template_categories", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name").notNullable();
    table.string("slug").notNullable().unique();
    table.string("description");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("template_sections", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.string("description");
    table.jsonb("schema").notNullable().defaultTo("{}");
    table.boolean("is_required").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });

  return Promise.resolve();
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("template_sections");
  await knex.schema.dropTableIfExists("template_categories");
  await knex.schema.dropTableIfExists("templates");
  return Promise.resolve();
}
