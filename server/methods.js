import { Email } from 'meteor/email';

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
  },
  sendRSVPEmail(name, event) {
    console.log("Sending message...");

    this.unblock();

    Email.send({
      from: "improntomvp@gmail.com",
      to: "raomax@gmail.com",
      subject: "RSVP",
      text: name+" is coming to "+ event,
    });
    console.log("Message Sent?");
  },
});
