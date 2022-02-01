import dataKey from "./config.js";
const key = dataKey.apiKey;
import {
  createDiv,
  creatH1,
  createInput,
  createP,
  createImg,
} from "./modules/createHtmlElem.js";

// // Create search container
const createSearchDiv = createDiv("search");
document.body.appendChild(createSearchDiv);
const createHeader = creatH1("header", "The daily weather");
createSearchDiv.appendChild(createHeader);

const CreateInput = createInput("myInput", "text", "Enter city name");
createSearchDiv.append(CreateInput);

// Create container for html elements
const createContainer = createDiv("container");
document.body.appendChild(createContainer);

const createWeatherCont = createDiv("weatherCont");
createContainer.append(createWeatherCont);

const createElements = (daily, city, day) => {
  // Create card
  const createWeatherDiv = createDiv("weatherDiv");
  createWeatherCont.appendChild(createWeatherDiv);
  const createDayTemDiv = createDiv("createDayTemDiv");

  const createDayContent = day;
  const createDay = createP("description", createDayContent);

  const createTempContent = `${Math.round(daily.temp.day)}°C`;
  const createTemp = creatH1("temperature", createTempContent);

  createDayTemDiv.append(createDay, createTemp);

  const imgSrc =
    "http://openweathermap.org/img/wn/" + daily.weather[0].icon + ".png";
  const createImage = createImg("image", imgSrc);

  const createMinMaxDiv = createDiv("minMax");
  const minParaContent = `Low ${Math.round(daily.temp.min)}°C`;
  const createMin = createP("minTem", minParaContent);
  const maxParaContent = `High ${Math.round(daily.temp.max)}°C`;
  const createMax = createP("maxTem", maxParaContent);
  createMinMaxDiv.append(createMin, createMax);

  const descParContent = daily.weather[0].description;
  const createDesc = createP("description", descParContent);

  const createHumidPar = `Humidity: ${daily.humidity}%`;
  const createHumid = createP("humidity", createHumidPar);

  const createWindPar = `Wind-speed: ${daily.wind_speed}km/h`;
  const createWind = createP("wind", createWindPar);

  createWeatherDiv.append(
    createDayTemDiv,
    createDesc,
    createImage,
    createMinMaxDiv,
    createHumid,
    createWind
  );
};

// Get data from open weather api
let cityName;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const getData = () => {
  cityName = document.querySelector(".myInput").value;
  let c = cityName.charAt(0).toUpperCase();
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=metric&appid=" +
    key;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      const city = data.city.name;
      const time = data.city.timezone;
      console.log(time);
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=current,minutely,hourly&units=metric&appid=" +
          key
      )
        .then((Response) => Response.json())
        .then((result) => {
          console.log(result);

          for (let i = 0; i < 5; i++) {
            const date = new Date();
            let day = weekday[(date.getDay() + i) % 7];
            createElements(result.daily[i], city, day);
          }
          //
          const cards = document.querySelectorAll(".weatherDiv");
          const firstWeatherCard = cards[0];
          const firstCardDiv = createDiv("firstCardCont");
          const head1 = document.createElement("h3");
          head1.setAttribute("class", "head1");
          head1.textContent = `Today ${city}`;
          firstWeatherCard.prepend(head1);
          firstWeatherCard.style.background = "none";
          firstWeatherCard.style.boxShadow = "none";
          firstWeatherCard.style.color = "white";
          firstWeatherCard.style.width = "300px";
          firstCardDiv.appendChild(firstWeatherCard);
          createWeatherCont.prepend(firstCardDiv);

          const secondWeatherCard = cards[1];
          const thirdWeatherCard = cards[2];
          const fourthWeatherCard = cards[3];
          const fifthWeatherCard = cards[4];
          const lastCardsDiv = createDiv("lastCardsCont");
          lastCardsDiv.append(
            secondWeatherCard,
            thirdWeatherCard,
            fourthWeatherCard,
            fifthWeatherCard
          );
          createWeatherCont.append(lastCardsDiv);
        });
    })
    .catch(() => alert("city not found"));
};

// Display city image
async function getCityImage() {
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    cityName +
    "&client_id=" +
    dataKey.photoKey;
  const bodyStyle = document.body.style;
  const getImage = await fetch(url)
    .then((response) => response.json())
    .catch(() => alert("image not found"));
  bodyStyle.backgroundImage = `url(${getImage.results[0].urls.regular})`;
  bodyStyle.backgroundRepeat = "no-repeat";
  bodyStyle.backgroundSize = "cover";
}

// Add events to the search
CreateInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createWeatherCont.innerHTML = "";
    getData();
    getCityImage();
  }
});
