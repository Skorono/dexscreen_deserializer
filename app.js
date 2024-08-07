import express, {json} from 'express';
import swagger from 'swagger-ui-express';

import swaggerJsdoc from "swagger-jsdoc";
//import {t} from "./pages_catch-all.js";

const app = express();

const swaggerUi = swagger
const PORT = process.env.PORT || 3000

const options = {
    definition: {
    openapi: "3.1.0",
    info: {
      title: "dexscreen deserializer API",
      version: "0.1.0",
      description:
        "",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "dexscreen_deserializer",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);


app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.post('/logs', (req, res) => {
    let message = req.body.message_text
    res.send(message)
    console.log("[-] Returned deserialized logs message:", message)
});

app.post('/charts', (req, res) => {
    chartSchema
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(PORT, () => {
    console.log("[x] Server listening on port:", PORT)
})

