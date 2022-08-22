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

// User Interface Logic
let passport = new Passport();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputLocation = document.querySelector("input#new-location").value;
  const inputLandmark = document.querySelector("input#new-landmark").value;
  const inputDate = document.querySelector("input#new-date").value;
  const inputNotes = document.querySelector("input#new-note").value;
  const inputMood = document.querySelector("input#new-mood").value;
  const inputWeather = document.querySelector("input#new-weather").value;
  let newPlace = new Destination(inputLocation, inputLandmark, inputDate, inputNotes, inputMood, inputWeather);
  passport.assignDestination(newPlace);
  console.log(passport.destinations);
}

window.addEventListener("load", function (){
  document.querySelector("form#location-nabber").addEventListener("submit", handleFormSubmission);
});