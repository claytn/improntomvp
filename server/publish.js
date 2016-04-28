Events = new Mongo.Collection("events");

Meteor.publish("displayEvents", function() {
  return Events.find();
});

// Meteor.publish("userEvents", function() {
//   // user later for generating all events that a user has/ had signed up for
//   // Events.find(userId);
//   return Events.find();
// });

