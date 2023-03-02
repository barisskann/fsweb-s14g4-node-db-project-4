/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tarif", (tarif) => {
      tarif.increments();
      tarif.string("tarif_adi").unique().notNullable();
      tarif.string("kayit_tarihi");
    })
    .createTable("adims", (adim) => {
      adim.increments();
      adim.integer("adim_sirasi").notNullable();
      adim.string("adim_talimati").notNullable();
      adim
        .integer("tarif_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tarif")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("icindekiler", (icindekiler) => {
      icindekiler.increments();
      icindekiler
        .integer("adim_id")
        .unique()
        .notNullable()
        .references("id")
        .inTable("adims")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("icindekileritems", (items) => {
      items.increments();
      items.string("icindekiler_adi");
      items.integer("miktar");
      items
        .integer("icindekiler_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("icindekiler")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("icindekiler")
    .dropTableIfExists("adims")
    .dropTableIfExists("tarif")
    .dropTableIfExists("icindekileritems");
};
