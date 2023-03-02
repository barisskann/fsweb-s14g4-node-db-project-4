const db = require("../Data/db-config");

function findId(id) {
  return db("adims")
    .join("tarif", "adims.tarif_id", "tarif.id")
    .select(
      "adims.id",
      "adims.adim_sirasi",
      "adims.adim_talimati",
      "adims.tarif_id",
      "tarif.tarif_adi"
    )
    .where("adims.tarif_id", id);
}

 function getIcindekiler(adimsayisi) {
  return  db("icindekileritems as it ")
    .join("icindekiler as i", "i.id", "it.icindekiler_id")
    .select("it.icindekiler_adi", "it.miktar")
    .where("i.adim_id", adimsayisi);
}
module.exports = {
  findId,
  getIcindekiler,
};
