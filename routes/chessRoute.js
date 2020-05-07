const route = require("express").Router();
const createBoard = require("../component/createBoard");

route.get("/", async (req, res) => {
	try {
		const board = await createBoard();
		res.status(200).json({ newGame: board });
	} catch (e) {
		console.log("e", e);
		res.status(404).json({ message: "counld not start the game", erro: e });
	}
});

module.exports = route;
