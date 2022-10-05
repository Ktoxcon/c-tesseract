import express from "express";
import { initDB } from "./db/index.js";

const Api = express();

Api.use(express.json());
Api.use(express.urlencoded({ extended: false }));

Api.listen(3000, () => {
  console.log("API IS RUNNING :)\n");
  initDB().then(() => {
    console.log("DB IS READY :)");
  });
});
