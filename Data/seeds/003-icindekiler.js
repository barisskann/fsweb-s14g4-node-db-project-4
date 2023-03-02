/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('icindekiler').del()
  await knex("icindekiler").insert([
    { id: 1, adim_id: 10 },
    { id: 2, adim_id: 11 },
    { id: 3, adim_id: 12 },

    { id: 4, adim_id: 13 },
    { id: 5, adim_id: 14 },
    { id: 6, adim_id: 15 },

    { id: 7, adim_id: 16 },
    { id: 8, adim_id: 17 },
    { id: 9, adim_id: 18 },
  ]);
};
