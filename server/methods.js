Meteor.methods({
  addEvent(event) {
    check(event, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Events.insert({
      text: event,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  deleteEvent(event) {
    check(event, Object);
    if (Meteor.userId() !== event.user) {
      throw new Meteor.Error('not-authorized');
    }
    Events.remove(event._id);
  }
});
