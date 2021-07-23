const express = require('express');
const connection = require('./config/connection.js')
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// import sequelize connection



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sync sequelize models to the database, then turn on the server
connection.sync({ force: false }).then(function() {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
})