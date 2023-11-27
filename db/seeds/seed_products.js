exports.seed = async function (knex) {
  await knex("products").del();
  await knex("products").insert([
    { description: "Tablet Pro", brand: "Apple", price: 887.63 },
    { description: "Notebook Aspire", brand: "Acer", price: 994.6 },
    { description: "Tablet Pro", brand: "Apple", price: 140.18 },
    { description: "Câmera Digital Alpha", brand: "Nikon", price: 1298.78 },
    { description: "Impressora LaserJet", brand: "HP", price: 210.62 },
    {
      description: "Console de Jogos Station",
      brand: "PlayStation",
      price: 1451.13,
    },
    { description: "Tablet Pro", brand: "Apple", price: 161.87 },
    { description: "Fone de Ouvido Bluetooth", brand: "Sony", price: 1046.83 },
    { description: "Fone de Ouvido Bluetooth", brand: "Sony", price: 1226.84 },
    { description: "Cafeteira Expresso", brand: "Philco", price: 936.87 },
  ]);
};
