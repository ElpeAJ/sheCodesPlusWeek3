let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let enterCity = prompt("Please enter City ");
enterCity = enterCity.toLowerCase();

if (enterCity === "paris") {
  alert(
    `It is currently ${Math.round(
      weather.paris.temp
    )}°C in ${enterCity} with a humidity of ${weather.paris.humidity}%`
  );
} else if (enterCity === "tokyo") {
  alert(
    `It is currently ${Math.round(
      weather.tokyo.temp
    )}°C in ${enterCity} with a humidity of ${weather.tokyo.humidity}%`
  );
} else if (enterCity === "lisbon") {
  alert(
    `It is currently ${Math.round(
      weather.lisbon.temp
    )}°C in ${enterCity} with a humidity of ${weather.lisbon.humidity}%`
  );
} else if (enterCity === "san francisco") {
  alert(
    `It is currently ${Math.round(
      weather["san francisco"].temp
    )}°C in ${enterCity} with a humidity of ${
      weather["san francisco"].humidity
    }%`
  );
} else if (enterCity === "oslo") {
  alert(
    `It is currently ${Math.round(
      weather.oslo.temp
    )}°C in ${enterCity} with a humidity of ${weather.oslo.humidity}%`
  );
} else {
  alert(
    "We do not have information for this citySorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}

// enterCities();
// checkCity();
