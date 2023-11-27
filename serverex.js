const express = require("express");
const app = express();
const apiV2Router = require("./routes/apiV2Router");

app.use(express.json());

app.use("/api/v2", apiV2Router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor rodando na porta 3000");
});
