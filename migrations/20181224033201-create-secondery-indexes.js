'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("create index index_hotel_stars on HOTELs(stars)")
    return queryInterface.sequelize.query("create index index_room_type on ROOMs(type)")
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query("Alter table HOTELs drop index_hotel_stars")
    return queryInterface.sequelize.query("Alter table ROOMs drop index_room_type")
  }
};
