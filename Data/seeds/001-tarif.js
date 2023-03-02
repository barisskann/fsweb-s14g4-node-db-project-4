/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tarif").del();
  await knex("tarif").insert([
    { id:7 ,tarif_adi: "rowValue1" },
    { id:8 ,tarif_adi: "rowValue2" },
    { id:9 ,tarif_adi: "rowValue3" },
  ]);
};
