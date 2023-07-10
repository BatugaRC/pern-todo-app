const Pool  = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "b1a9t2u5",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});
module.exports = pool;