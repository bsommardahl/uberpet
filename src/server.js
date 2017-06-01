'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || 'localhost' });

const db = [
            { id:1, age: 3, type: 'dog'},
            { id:2, age: 5, type: 'cat'},
            { id:3, age: 10, type: 'dog'},
            { id:4, age: 3, type: 'cat'},
        ];
const repository = require('./repository');
const repo = new repository(db)

const ReservationService = require('./reservationService');
const reservationService = new ReservationService(repo);

server.route({
    method: 'GET',
    path: '/pets',
    handler: function (request, reply) {
        const searchResult = repo.search({ type: request.query.type, age: request.query.age })
        reply(searchResult);
    }
});


server.route({
    method: 'POST',
    path: '/reservation',
    handler: function (request, reply) {
        const reservation = reservationService.reserve(request.payload.id, request.payload.date);
        reply(reservation);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});