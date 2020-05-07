require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 4000;

const chessRoute = require("./routes/chessRoute");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/chess", chessRoute);

server.get("/", (req, res) => res.send("Backend Server for chess app"));

server.listen(port, () => {
	console.log(`\n*** Server listening on port ${port} ***\n`);
});
