export function up(knex) {
  return knex.schema
    .createTable("customers", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("phone_1", 20).notNullable();
      table.string("phone_2", 20);
      table.date("birth_date");
    })
    .createTable("services", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.integer("price").notNullable();
    })
    .createTable("customer_services", function (table) {
      table.increments("id").primary();
      table.integer("customer_id").unsigned().notNullable();
      table.integer("service_id").unsigned().notNullable();
      table.date("scheduled_at").notNullable();
      table.integer("price").notNullable();
      table.integer("sale_id").unsigned().notNullable();
      table.foreign("customer_id").references("id").inTable("customers").onDelete("CASCADE");
      table.foreign("service_id").references("id").inTable("services").onDelete("CASCADE");
      table.foreign("sale_id").references("id").inTable("sales").onDelete("CASCADE");
    })
    .createTable("products", function (table) {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.integer("amount").notNullable();
      table.integer("price").notNullable();
      table.integer("min_amount").notNullable();
    })
    .createTable("customer_products", function (table) {
      table.increments("id").primary();
      table.integer("product_id").unsigned().notNullable();
      table.integer("customer_id").unsigned().notNullable();
      table.integer("sale_id").unsigned().notNullable();
      table.foreign("product_id").references("id").inTable("products").onDelete("CASCADE");
      table.foreign("customer_id").references("id").inTable("customers").onDelete("CASCADE");
      table.foreign("sale_id").references("id").inTable("sales").onDelete("CASCADE");
    })
    .createTable("sales", function (table) {
      table.increments("id").primary();
      table.integer("customer_id").unsigned().notNullable();
      table.integer("price").notNullable();
      table.foreign("customer_id").references("id").inTable("customers").onDelete("CASCADE");
    });
}

export function down(knex) {
  return knex.schema
    .dropTable("customer_products")
    .dropTable("customer_services")
    .dropTable("sales")
    .dropTable("products")
    .dropTable("services")
    .dropTable("customers");
}

export const config = { transaction: false };
