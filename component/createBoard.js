const position = [
	(rook: {
		piece: { piece: "rook", rank: 8, file: "a" },
		piece: { piece: "rook", rank: 8, file: "g" },
		piece: { piece: "rook", rank: 1, file: "g" },
	}),
];

function setPiece(rank, file) {
	for (let o = 0; o < Object.keys(position).length; o++) {
		if (file === position[o][file] && rank === position[o][rank])
			return position[o];
		return "";
	}
}

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
				piece: setPiece(rank[n], file[i]),
			});
		}
	}
	return board;
}
module.exports = createBoard;
