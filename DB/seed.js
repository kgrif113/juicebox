const { client } = require("./index");

async function testDB() {
  try {
    client.connect();
    const result = await client.query("SELECT * FROM users;");
    console.log(result);
    client.end();
  } catch (error) {
    console.log(error);
  }
}
