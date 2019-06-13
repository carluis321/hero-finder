const axios = require('axios');
const { apiUrl } = require('./conts/index');

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

module.exports = axiosInstance;