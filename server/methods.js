Meteor.methods({
  addEvent(event, time, loc, des) {
    check(event, String);
    check(time, String);
    check(loc, String);
    check(des, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Events.insert({
      text: event,
      time: time,
      loc: loc,
      des: des,
      createdAt: new Date(),
      user: Meteor.userId()
    });
    // Events.insert({
    //   name: event,
    //   time: time,
    //   loc: location,
    //   tags: {
    //     tag1: tag1,
    //     tag2: tag2,
    //     tag3: tag3
    //   },
    //   des: description,
    //   createdAt: new Date(),
    //   user: Meteor.userId()
    // });
  },
  deleteEvent(event) {
    check(event, Object);
    if (Meteor.userId() !== event.user) {
      throw new Meteor.Error('not-authorized');
    }
    Events.remove(event._id);
  }
});
