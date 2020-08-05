import dotenv from "dotenv";

dotenv.config();

export const port = process.env.API_PORT || 5000;
