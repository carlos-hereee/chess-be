const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{
					username: "new_user",
					email: "new_user@email.dev",
					password: bcrypt.hashSync(
						process.env.SEED_PASSWORD || "password",
						10
					),
				},
			]);
		});
};
