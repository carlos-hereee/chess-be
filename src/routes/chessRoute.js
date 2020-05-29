const route = require("express").Router();

route.get("/", async (req, res) => {
	try {
		res.status(200).json({ newGame: "board" });
	} catch (e) {
		console.log("e", e);
		res.status(404).json({ message: "could not start the game", erro: e });
	}
});

module.exports = route;
