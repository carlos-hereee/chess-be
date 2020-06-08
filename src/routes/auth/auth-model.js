const db = require("../../data/db-config");

module.exports = {
	addNewUser,
	getByUserId,
};

function getByUserId(userId) {
	return db("users").where({ userId }).first();
}

function addNewUser(user) {
	return db("users")
		.insert(user, "userId")
		.then((userIds) => {
			return getByUserId(userIds[0]);
		});
}
