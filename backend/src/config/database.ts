import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL, {
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conexão foi feita com sucesso!");
  })
  .catch((error) => {
    console.error(`Houve um error ao se connectar ao MongoDB: ${error}`);
  });

export default mongoose;
