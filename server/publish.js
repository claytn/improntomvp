Events = new Mongo.Collection("events");

Meteor.publish("allEvents", function() {
  return Events.find();
});

Meteor.publish("userEvents", function() {
  return Events.find();
});
