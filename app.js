const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const users = require('./routes/users');
const app = express();
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/usuarios', users);

app.listen(port, () => console.log(`Ntalk running on port ${port}`));

