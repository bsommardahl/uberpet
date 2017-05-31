'use strict';

const mototaxi = require('mototaxi');
const dispatcher = mototaxi.getDispatcher({ commandHandlers: [] });

const Hapi = require('hapi');
const Boom = require('boom');
const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || 'localhost' });

//create a route for each feature

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(Boom.notImplemented('This method has not been coded yet.'))
    }
});

// server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: function (request, reply) {
//         reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//     }
// });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

module.exports = server;
