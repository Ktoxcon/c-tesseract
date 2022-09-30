import { initDB } from "./db/index.js";

initDB().then(() => {
  console.log("DB Created :)");
});
