const db = require("../../data/db-config");

module.exports = {
	add,
	findById,
};

function findById(id) {
	return db("user").where({ id }).first();
}

function add(user) {
	return db("users")
		.insert(user, "id")
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}
