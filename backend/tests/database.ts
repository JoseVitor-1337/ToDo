import mongoose from "../src/config/database";

interface Model {
  deleteAll: (object: Object) => void;
}

class Database {
  public async startConnection() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      throw new Error(`Erro ao se connectar ao MongoDB: ${error}`);
    }
  }

  public async closeConnection() {
    try {
      await mongoose.disconnect();
    } catch (error) {
      throw new Error(`Erro ao desconnectar do MongoDB: ${error}`);
    }
  }

  public deleteAllRecordsFromThisCollection(Model: Model) {
    try {
      Model.deleteAll({});
    } catch (error) {
      throw new Error(`Erro ao deletar os registros da Coleção`);
    }
  }
}

export default new Database();
