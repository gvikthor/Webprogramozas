'use strict';
const models = require('../models')
const { User, Movie, Genre, Rating } = models
const faker = require('@faker-js/faker').faker
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersRaw = [
      {name: 'Báthory Gergő', uname: 'bthygerg0'},
      {name: 'Miklósi Péter', uname: 'miklosi.peti'},
      {name: 'Pomzi Bálint', uname: 'balintka123'},
      {name: 'Etyke Áron', uname: 'aron.szormok'},
      {name: 'Győrffy Rezső', uname: 'osztondij'}   
    ]

    const moviesRaw = [
      {
        title: 'Rogue One',
        director: 'Gareth Edwards',
        description: 'A Star Wars story that follows a group of rebels on a mission to steal the plans for the Death Star.',
        year: 2016,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg',
        ratingsEnabled: true
      },
      {
        title: 'Dune',
        director: 'Denis Villeneuve',
        description: 'An epic science fiction film based on the novel by Frank Herbert, set in a distant future amidst a sprawling interstellar empire.',
        year: 2021,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        ratingsEnabled: true
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'Peter Jackson',
        description: 'The first installment in the iconic fantasy trilogy, following the journey of a young hobbit tasked with destroying a powerful ring to save Middle-earth.',
        year: 2001,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
        ratingsEnabled: true
      },
      {
        title: 'Twilight',
        director: 'Catherine Hardwicke',
        description: 'A romantic fantasy film based on the novel by Stephenie Meyer, exploring the love story between a human and a vampire.',
        year: 2008,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg',
        ratingsEnabled: true
      },
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        description: 'A mind-bending heist thriller that explores the concept of dreams within dreams, starring Leonardo DiCaprio.',
        year: 2010,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        ratingsEnabled: true
      }
    ]

    const genresRaw = [
      {name: 'Scifi', description: 'Lasers go bzzzz, spaceships go zoom zoom'},
      {name: 'Fantasy', description: 'Magic and stuff'},
      {name: 'Romance', description: 'Love, kissing, betrayal, heartbreak'},
      {name: 'Action', description: 'Explosions, car chases, guns, and more explosions'}
    ]

    const ratingsRaw = [
      {rating: 5, comment: 'Ez a film nagyon jó volt, ajánlom mindenkinek!', UserId: 1, MovieId: 5},
      {rating: 4, comment: 'Nagyon jó film, csak ajánlani tudom!', UserId: 1, MovieId: 2},
      {rating: 2, comment: 'Nem tetszett, nem ajánlom.', UserId: 1, MovieId: 3},
      {rating: 1, comment: 'Ez a film nagyon rossz volt, nem ajánlom senkinek!', UserId: 1, MovieId: 1},

      {rating: 5, comment: 'Ez a film nagyon jó volt, ajánlom mindenkinek!', UserId: 2, MovieId: 2},
      {rating: 3, comment: 'Nem volt rossz, de nem is volt jó.', UserId: 2, MovieId: 5},
      {rating: 2, comment: 'Nem tetszett, nem ajánlom.', UserId: 2, MovieId: 4},

      {rating: 5, comment: 'Ez a film nagyon jó volt, ajánlom mindenkinek!', UserId: 3, MovieId: 1},

      {rating: 5, comment: 'Ez a film nagyon jó volt, ajánlom mindenkinek!', UserId: 4, MovieId: 2},
      {rating: 2, comment: 'Nem tetszett, nem ajánlom.', UserId: 4, MovieId: 1},
      {rating: 1, comment: 'Ez a film nagyon rossz volt, nem ajánlom senkinek!', UserId: 4, MovieId: 3}
    ]
    
    const users = await User.bulkCreate(usersRaw.map(user => ({
      displayname: user.name,
      username: user.uname,
      email: `${user.uname}@elte.hu`,
      password: bcrypt.hashSync('jelszo', 10),
      isAdmin: false
    })))
    const movies = await Movie.bulkCreate(moviesRaw)
    const genres = await Genre.bulkCreate(genresRaw)
    const ratings = await Rating.bulkCreate(ratingsRaw)

    await movies[0].addGenre(genres[0])
    await movies[0].addGenre(genres[1])
    await movies[0].addGenre(genres[3])

    await movies[1].addGenre(genres[0])
    await movies[1].addGenre(genres[1])

    await movies[2].addGenre(genres[1])

    await movies[3].addGenre(genres[2])

    await movies[4].addGenre(genres[0])
    await movies[4].addGenre(genres[3])
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
