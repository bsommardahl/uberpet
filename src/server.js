'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || 'localhost' });

const db = [
            { age: 3, type: 'dog'},
            { age: 5, type: 'cat'},
            { age: 10, type: 'dog'},
            { age: 3, type: 'cat'},
        ];

server.route({
    method: 'GET',
    path: '/pets',
    handler: function (request, reply) {
        const repository = require('./repository');
        const repo = new repository(db)
        const searchResult = repo.search({ type: request.query.type, age: request.query.age })
        reply(searchResult);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});