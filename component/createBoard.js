const position = {
	rook: [
		{ rank: 1, file: "a" },
		{ rank: 8, file: "a" },
	],
};
// if (file[i] === "b" || file[i] === "f") {
// 			board.push({
// 				id: `${file[i]}:${rank[n]}`,
// 				rank: rank[n],
// 				file: file[i],
// 				piece: "pawn",
// 			});
// 		} else if (file[i] === "a" && rank[n] === 1) {
// 			board.push({
// 				id: `${file[i]}:${rank[n]}`,
// 				rank: rank[n],
// 				file: file[i],
// 				piece: "rook",
// 			});
// 		} else {
// function createPiece() {}

function createBoard() {
	const file = ["a", "b", "c", "d", "e", "f", "g"];
	const rank = [1, 2, 3, 4, 5, 6, 7, 8];
	const board = [];
	for (let i = 0; i < file.length; i++) {
		for (let n = 0; n < rank.length; n++) {
			board.push({
				id: `${file[i]}:${rank[n]}`,
				rank: rank[n],
				file: file[i],
				piece: "",
			});
		}
	}
	return board;
}
module.exports = createBoard;
