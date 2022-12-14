require('dotenv').config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`WeTravel Back is running in the port ${port} 💜`); // eslint-disable-line no-console
  });
});
