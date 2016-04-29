Meteor.methods({
  addEvent(event, time, loc, des, day, type, nop, price) {
    Events.insert({
      text: event,
      time: time,
      loc: loc,
      des: des,
      day: day,
      type: type,
      nop: nop,
      price: price,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  deleteEvent(event) {
    check(event, Object);
    Events.remove(event._id);
  }
});
