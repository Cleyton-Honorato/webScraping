const Sequelize = require("sequelize");
const path = require("path");

let dababase = null;

const loadModels = sequelize => {
  const dir = path.join(__dirname, "./../models");
  const models = [];

  const filePages = path.join(dir, "pages");
  const fileProducts = path.join(dir, "products");

  const modelPages = sequelize.import(filePages);
  const modelProducts = sequelize.import(fileProducts);

  models[modelPages.name] = modelPages;
  models[modelProducts.name] = modelProducts;

  return models;
};

module.exports = config => {
  if (!dababase) {
    const op = Sequelize.Op;
    const sequelize = new Sequelize(
      config.dababase,
      config.username,
      config.password,
      {
        host: config.params.host,
        dialect: config.params.dialect,
        // operatorsAliases: false,
        logging: false
      }
    );

    database = {
      sequelize,
      Sequelize,
      models: {}
    };

    database.models = loadModels(sequelize);

    sequelize.sync().done(() => database);
  }

  return database;
};
