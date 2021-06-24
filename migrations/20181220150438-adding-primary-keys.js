'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
  //payment primary
    queryInterface.addConstraint('PAYMENTs',['payment_id','payment_date','hotel_name','hotel_location']
        ,{
          type:'primary key',
          name:'payment_primary_constraint'
        })
       //PAYMENTs table foreign key constraints
       queryInterface.addConstraint('PAYMENTs',['broker_username']
       ,{
         type: 'foreign key',
         name: 'payment_fkey_constraint_broker_username',
         references: { //Required field
         table: 'BROKERs',
         field: 'username'
         },
         onDelete: 'cascade',
         onUpdate: 'cascade'
       })
     
       queryInterface.sequelize.query("ALTER TABLE PAYMENTs "+
    "ADD CONSTRAINT FK_PAYMENTs_ROOMs"+
    " FOREIGN KEY(room_number,hotel_name,hotel_location) REFERENCES ROOMs(room_number,hotel_name,hotel_location)"+
    " on delete cascade on update cascade")
    
       //customer hotel rates primary
         queryInterface.addConstraint('CUSTOMER_HOTEL_RATEs',['customer_username','hotel_name','hotel_location']
        ,{
          type:'primary key',
          name:'customer_hotel_rate_primary_constraint'
        }) 
         //CUSTOMER_HOTEL_RATEs table foreign key constraints
         queryInterface.addConstraint('CUSTOMER_HOTEL_RATEs',['customer_username']
         ,{
           type: 'foreign key',
           name: 'customer_fkey_constraint_customer_username',
           references: { //Required field
           table: 'CUSTOMERs',
           field: 'username'
           },
           onDelete: 'cascade',
           onUpdate: 'cascade'
         })
         
      queryInterface.sequelize.query("ALTER TABLE CUSTOMER_HOTEL_RATEs "+
      "ADD CONSTRAINT FK_HOTEL_RATES_HOTELs"+
      " FOREIGN KEY(hotel_name,hotel_location) REFERENCES HOTELs(hotel_name,hotel_location)"+
      " on delete cascade on update cascade")
      
      
        //Reservation primary
         queryInterface.addConstraint('RESERVATIONs',['customer_username','room_number','hotel_name','hotel_location','check_in_date']
        ,{
          type:'primary key',
          name:'reservation_primary_constraint'
        })
         //RESERVATIONs table foreign key constraints
     queryInterface.sequelize.query("ALTER TABLE RESERVATIONs "+
     "ADD CONSTRAINT FK_RESERVATIONs_HOTELs"+
     " FOREIGN KEY(room_number,hotel_name,hotel_location) REFERENCES ROOMs(room_number,hotel_name,hotel_location)"+
     " on delete cascade on update cascade")
        
        return queryInterface.addConstraint('RESERVATIONs',['customer_username']
        ,{
          type: 'foreign key',
          name: 'reservation_fkey_constraint_customer_username',
          references: { //Required field
          table: 'CUSTOMERs',
          field: 'username'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }) 
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
