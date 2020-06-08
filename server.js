require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 4000;

const chessRoute = require("./src/routes/chessRoute");
const authRoute = require("./src/routes/auth/auth-router");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/chess", chessRoute);
server.use("/user", authRoute);

server.get("/", (req, res) => res.send("Backend Server for chess app"));

server.listen(port, () => {
	console.log(`\n*** Server listening on port ${port} ***\n`);
});
