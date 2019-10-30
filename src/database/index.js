import Sequelize from "sequelize";

import User from "../app/models/User";
import File from "../app/models/File";

import databaseConfig from "../config/database";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();