const express = require('express');
const axios = require('axios');
const async = require('async');
const app = express();

const key = `50c64473468d4e2eb21211443220507`;
const baseURL = `http://api.weatherapi.com/v1`;

app.get('/currentweather', async (req, res) => {
  const { filter, page, city } = req.query;
  let filterarr = [];
  let cityarr = [];
  if (filter) {
    filterarr = filter.split(',');
  }
  if (city) {
    cityarr = city.split(',');
  }
  const cityList = cityarr || [
    'bangkok',
    'london',
    'macau',
    'singapore',
    'paris',
    'dubai',
    'istanbul',
    'delhi',
    // 'antalya',
    // 'shenzhen',
    // 'mumbai',
    // 'phuket',
    // 'rome',
    // 'tokyo',
    // 'pattaya',
    // 'taipei',
    // 'mecca',
    // 'guangzhou',
    // 'prague',
    // 'medina',
    // 'seoul',
    // 'amsterdam',
    // 'agra',
    // 'miami',
    // 'osaka',
    // 'shanghai',
    // 'denpasar',
    // 'barcelona',
    // 'milan',
    // 'chennai',
    // 'vienna',
    // 'jaipur',
    // 'berlin',
    // 'cairo',
    // 'orlando',
    // 'moscow',
    // 'venice',
    // 'madrid',
    // 'riyadh',
    // 'dublin',
    // 'florence',
    // 'jerusalem',
    // 'hanoi',
    // 'toronto',
    // 'Johannesburg',
    // 'sydney',
    // 'munich',
    // 'jakarta',
    // 'beijing',
    // 'brussels',
    // 'budapest',
    // 'lisbon',
    // 'dammam',
    // 'heraklion',
    // 'kyoto',
    // 'zhuhai',
    // 'vancouver',
    // 'melbourne',
    // 'warsaw',
    // 'marrakesh',
    // 'kolkata',
    // 'auckland',
    // 'guilin',
    // 'honolulu',
    // 'hurghada',
    // 'chiba',
    // 'stockholm',
    // 'lima',
    // 'batam',
    // 'nice',
    // 'fukuoka',
    // 'jeju',
    // 'porto',
    // 'rhodes',
    // 'bangalore',
  ];
  try {
    let finalCities = cityList;
    if (filter && filterarr.length > 0) {
      finalCities = cityList.filter((el) => filterarr.includes(el));
    }
    // every page display 5 results
    if (page) {
      finalCities = finalCities.slice(
        (page - 1) * 5,
        page * 5 > finalCities.length ? finalCities.length : page * 5
      );
    }
    let resultarr = [];
    for (const city of finalCities) {
      const { data } = await axios.get(
        `${baseURL}/current.json?key=${key}&q=${city}`
      );
      resultarr.push({ location: data.location, weather: data.current });
    }

    res.json({
      status: true,
      result: resultarr,
    });
  } catch (error) {
    console.log(error.data);
    res.json({ status: false, result: error });
  }
});

app.get('/data', async (req, res) => {
  const { city, forcast, historical } = req.query;
  let cityarr;
  if (city) {
    cityarr = city.split(',');
  }
  try {
    let resultarr = [];
    for (const city of cityarr) {
      const { data } = await axios.get(
        `${baseURL}/forecast.json?key=${key}&q=${city}&days=${forcast}`
      );
      resultarr.push({ data });
    }

    res.json({
      status: true,
      result: resultarr,
    });
  } catch (error) {
    console.log(error.data);
    res.json({ status: false, result: error });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port number ${PORT}`);
});
