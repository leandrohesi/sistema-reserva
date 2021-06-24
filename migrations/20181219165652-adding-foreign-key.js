'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    //HOTELs table foreign key constraints
    queryInterface.addConstraint('HOTELs',['hotel_owner_username']
        ,{
          type: 'foreign key',
          name: 'hotel_fkey_constraint_name',
          references: { //Required field
          table: 'HOTEL_OWNERs',
          field: 'username'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
   
     
     //ROOMs table foreign key constraints
     return queryInterface.sequelize.query("ALTER TABLE ROOMs "+
     "ADD CONSTRAINT FK_ROOMs_HOTELs"+
     " FOREIGN KEY(hotel_name,hotel_location) REFERENCES HOTELs(hotel_name,hotel_location)"+
     " on delete cascade on update cascade")
     
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
