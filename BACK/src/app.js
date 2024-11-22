import cors from "cors";
import express from "express";

import ventasRouter from "./router/ventas.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.use(express.json());

app.use("/ecommers", ventasRouter);

app.listen(3000, () => {
  console.log(`Connected server at http://localhost:3000`);
});
