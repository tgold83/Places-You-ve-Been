// Business logic for Passport
function Passport() {
  this.destinations = {};
}

Passport.prototype.assignDestination = function(destination) {
  this.destinations[destination.location] = destination;
};


// Business logic for Destination
function Destination(location, landmark, date, notes, mood, weather) {
  this.location = location;
  this.landmark = landmark;
  this.date = date;
  this.notes = notes;
  this.mood = mood;
  this.weather = weather;
}