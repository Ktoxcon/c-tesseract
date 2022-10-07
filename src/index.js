import cors from "cors";
import express from "express";
import { initDB } from "./db/index.js";
import ToDosRequestHandler from "./handlers/todos.js";

const Api = express();

Api.use(express.json());
Api.use(express.urlencoded({ extended: false }));

Api.use(cors());
Api.use("/v1", ToDosRequestHandler);

Api.listen(3000, () => {
  console.log("API IS RUNNING :)\n");
  initDB().then(() => {
    console.log("DB IS READY :)");
  });
});
