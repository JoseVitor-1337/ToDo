import app from "./app";
import cors from "cors";
import { port } from "./config/enviroment";

app.use(cors());

app.listen(Number(port), () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
