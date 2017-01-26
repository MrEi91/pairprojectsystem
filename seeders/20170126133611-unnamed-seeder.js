'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
      {
        name : "Eri Irawan",
        birthdate:"1991-02-01",
        character:'Individualize',//'learner','Responsibility','Includer','Ideation',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Raditya arya pradipta",
        birthdate:"1993-06-26",
        character:"Deliberation",//"Empathy","Futuristic","Individualization","Maximizer",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Samuel Partogi Hasudungan Sinaga",
        birthdate:"1993-03-21",
        character:'Adaptability',//'Empathy','Futuristic','Harmony','Maximizer',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Irwin Pratajaya",
        birthdate:"1989-03-12",
        character:'Analytical',//'Context','Futuristic','Includer','Analytical',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Irsan Sebastian",
        birthdate:"1992-07-14",
        character:'Adaptability',//'Communication','Harmony','Ideation','Individualization',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Ida bagus chahya dhegana",
        birthdate:"1989-01-12",
        character:'Connectedness',//'Empathy','Futuristic','Harmony','Relator',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Isumi Karinaningsih",
        birthdate:"1989-02-07",
        character:'Arranger',//'Futuristic','Ideation','Responsibility','Strategic',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Endy",
        birthdate:"1992-07-12",
        character:'Arranger',//'Belief','Connectedness','Empathy','Restorative',
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
