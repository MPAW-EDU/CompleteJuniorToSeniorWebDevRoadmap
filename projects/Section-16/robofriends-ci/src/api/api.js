const axios = require('axios');

export const apiCall = (link) => 
  axios(link).then(response => response.json())