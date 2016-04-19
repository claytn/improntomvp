Meteor.methods({
  addEvent(event, time, loc, des, day, type, nop) {
    check(event, String);
    check(time, String);
    check(loc, String);
    check(des, String);
    check(day, String);
    check(type, String);
    check(nop, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Events.insert({
      text: event,
      time: time,
      loc: loc,
      des: des,
      day: day,
      type: type,
      nop: nop,
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
