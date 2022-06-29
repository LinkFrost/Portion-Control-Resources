import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
