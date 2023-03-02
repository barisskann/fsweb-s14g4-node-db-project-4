const express = require("express");
const app = express();
const tarifRouter = require("./Routes/tarif");

app.use(express.json());

app.use(tarifRouter);
app.listen(9000, (_) => {
  console.log("PORT 9000 SUCCESS");
});
