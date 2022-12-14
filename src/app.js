const express = require('express');

//? Importamos base de datos
const db = require('./utils/database');

//? Importamos router
const usersRouter = require('./users/users.router');

const port = 9000;

const app = express();

//? Authenticamos conexión con base de datos
db.authenticate()
    .then(() => {console.log('Database Authenticated Succesfully.') })
    .catch(err => console.log(err.message));

//? Sincronizamos nuestros modelos con base de datos
db.sync()
    .then(() => {console.log('Database Synced Succesfully.')})
    .catch(err => console.log(err.message));

//? Habilitamos formato JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
});

//? Versionamos nuestra api
app.use('/api/v1', usersRouter);

//? .listen() recibe dos parámetros ->(puerto, callback)
app.listen(port , () => {
    console.log(`Server started at port ${port}`)
});
