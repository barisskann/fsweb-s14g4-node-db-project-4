/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("adims").del();
  await knex("adims").insert([
    { id: 10, adim_talimati: "rowValue1", adim_sirasi: 1, tarif_id: 7 },
    { id: 11, adim_talimati: "rowValue2", adim_sirasi: 2, tarif_id: 7 },
    { id: 12, adim_talimati: "rowValue3", adim_sirasi: 3, tarif_id: 7 },
    { id: 13, adim_talimati: "rowValue1", adim_sirasi: 1, tarif_id: 8 },
    { id: 15, adim_talimati: "rowValue2", adim_sirasi: 2, tarif_id: 8 },
    { id: 14, adim_talimati: "rowValue3", adim_sirasi: 3, tarif_id: 8 },
    { id: 16, adim_talimati: "rowValue1", adim_sirasi: 1, tarif_id: 9 },
    { id: 17, adim_talimati: "rowValue2", adim_sirasi: 2, tarif_id: 9 },
    { id: 18, adim_talimati: "rowValue3", adim_sirasi: 3, tarif_id: 9 },
  ]);
};
