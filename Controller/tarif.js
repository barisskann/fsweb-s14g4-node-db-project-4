const tarif = require("../Model/tarif");

exports.getFindId = async (req, res, next) => {
  const { id } = req.params;
  let obj = {
    adimlar: [],
  };
  const data = await tarif.findId(id);
  for (let i = 0; i < data.length; i++) {
    let a = await tarif.getIcindekiler(data[i].id);
      obj.tarif_id = data[i].tarif_id;
      obj.tarif_adi = data[i].tarif_adi;
      obj.adimlar = [
        ...obj.adimlar,
        {
          adim_id: data[i].id,
          adim_sirasi: data[i].adim_sirasi,
          adim_talimati: data[i].adim_talimati,
          icindekiler: a.length > 0 ? a : [],
        },
      ];
  }
  res.status(200).json(obj);
};
