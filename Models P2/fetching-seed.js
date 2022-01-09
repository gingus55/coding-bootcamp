// const renderSearchResultsPage = async (req, res) => {
//     const { city } = req.query;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//     const { data } = await axios.get(url);
//     const dataToRender = {
//       name: data.name,
//       description: data.weather[0].description,
//       temperature: data.main.temp,
//       humidity: data.main.humidity,
//       windSpeed: data.wind.speed,
//     };
//     res.render("searchResults", dataToRender);
//   };

const axios = require("axios");

//   const { default: axios } = require("axios");

// const { fetch } = require(axios);

// blogData = blogData.map((each) => {
//     return each.get({ plain: true });
//   });

const url = `https://wger.de/api/v2/exercise/?language=2`;

const getDataFromApi = async function (url) {
  const response = await axios.get(url);
  const want = response.data.results;
  //   const data = await response.json();
  const bob = want.map((each) => {
    const object = {
      exercise_name: each.name,
      type: each.license_author,
      description: each.description,
      target: each.creation_date,
    };

    return object;
  });

  console.log(bob);
};

getDataFromApi(url);
