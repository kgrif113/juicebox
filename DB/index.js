const pg = require("pg");

const { client } = new pg.Client("postgress://localhost:5432/bruhMoment");

module.exports = { client };
