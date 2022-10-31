const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// through routes/index.js we get routes for
// category/product/tag
app.use(routes);

// sync sequelize models to the database, then turn on the server
// turn on connection to db and server
// force=true to drop and recreate table
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Sean Wallace E-Commerce Back End listening on PORT: ${PORT}...`));
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
