// the connection between the database and the server
// help query to my database and perform all of my CRUD operations

const connection = require("./connection.js");
const orm = {
    all: function () {
        connection.query()
    },
    create: function () { },
    delete: function () { }
};

module.exports = orm