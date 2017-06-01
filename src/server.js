'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || 'localhost' });

server.route({
    method: 'GET',
    path: '/pets',
    handler: function (request, reply) {
        //get an array of pet by the search criteria
        // const repository = require('./petRepository');
        // const searchResult = repository.search({ type: request.payload.type, age: request.payload.age })
        reply(searchResult);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});