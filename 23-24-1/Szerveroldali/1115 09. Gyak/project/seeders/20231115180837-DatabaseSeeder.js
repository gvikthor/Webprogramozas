'use strict';
const models = require('../models')
const { User, Movie, Genre, Rating } = models
const faker = require('@faker-js/faker').faker

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await User.create({
        username: faker.internet.userName(),
        displayname: faker.person.fullName(),
        email: faker.internet.email(),
        password: 'jelszo',
        isAdmin: false
    })

    const movie = await Movie.create({
        title: faker.lorem.words({min: 1, max: 5}),
        director: faker.person.fullName(),
        description: faker.lorem.sentences({min: 4, max: 10}),
        year: faker.number.int({min: 1980, max: 2023}),
        imageUrl: faker.image.urlPicsumPhotos(),
        ratingsEnabled: true
    })

    const rating = await Rating.create({
        rating: faker.number.int({min: 1, max: 4}),
        comment: faker.lorem.sentences({min: 1, max: 3}),
        UserId: user.id,
        MovieId: movie.id
    })

    const g1 = await Genre.create({
        name: faker.lorem.words({min: 1, max: 3})
    })
    const g2 = await Genre.create({
        name: faker.lorem.words({min: 1, max: 3})
    })

    await movie.addGenre(g1)
    await movie.addGenre(g2)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
