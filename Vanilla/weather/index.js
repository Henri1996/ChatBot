"use strict";
const axios = require("axios");
const apikey = 'c3b9c2a244ac46e9954225557190702'; //your api key to the apixu
const getWeather = location => {
return new Promise(async (resolve, reject) => {
try{
const weatherConditions = await axios.get( //get weather info from the api
"http://api.apixu.com/v1/forecast.json", {
params: {
key: apikey ,
q: location ,
days: 3 }
});
resolve(weatherConditions.data) //returns back the
//results to the chatbot
} catch(error){
reject(error); }
});
}
module.exports = getWeather;