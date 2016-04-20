Events = new Mongo.Collection("events");

Meteor.publish("displayEvents", function() {
  return Events.find();
});

// Meteor.publish("userEvents", function() {
//   // user later for generating all events that a user has/ had signed up for
//   // Events.find(userId);
//   return Events.find();
// });

// Meteor.publish("filterEvents", function(param) {
//   switch (param) {
//     case 'Sunday':
//       return Events.find( {day: 'Sunday'} );
//       break;
//     case: 'Monday':
//
//       break;
//     default:
//
//   }
// })
