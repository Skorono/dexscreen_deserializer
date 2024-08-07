import express, {json} from 'express';
import swagger from 'swagger-ui-express';

import swaggerJsdoc from "swagger-jsdoc";
import logs_router from "./routes/logs_route.js";
import chart_router from "./routes/charts_route.js";

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
        url: "http://localhost:" + PORT,
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

app.use('api/', logs_router)
app.use('api/', chart_router)

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(PORT, () => {
    console.log("[x] Server listening on port:", PORT)
})

export default app

