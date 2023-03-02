/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("icindekileritems").del();
  await knex("icindekileritems").insert([
    {
      id: 1,
      icindekiler_adi: "rowValue2",
      miktar: 1,
      icindekiler_id: 4,
    },
    {
      id: 2,
      icindekiler_adi: "rowValue3",
      miktar: 1,
      icindekiler_id: 3,
    },
    {
      id: 4,
      icindekiler_adi: "rowValue1",
      miktar: 1,
      icindekiler_id: 3,
    },
    {
      id: 5,
      icindekiler_adi: "rowValue2",
      miktar: 1,
      icindekiler_id: 2,
    },
    {
      id: 6,
      icindekiler_adi: "rowValue3",
      miktar: 1,
      icindekiler_id: 2,
    },
    {
      id: 7,
      icindekiler_adi: "rowValue1",
      miktar: 1,
      icindekiler_id: 1,
    },
    {
      id: 8,
      icindekiler_adi: "rowValue2",
      miktar: 1,
      icindekiler_id: 1,
    },
  ]);
};
