const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDatabase = require("./config/db")

const authRouter = require("./routes/auth.routes")

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());


app.use('/', authRouter);

const BACKEND_DEPLOYED_LINK = process.env.BACKEND_DEPLOYED_LINK

connectDatabase().then(() => {
  app.listen(8080, () =>
    console.log(`Server listening on ${BACKEND_DEPLOYED_LINK}`)
  );
});
