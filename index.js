const axios = require('axios');

const runCall = async (input) => {
  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input.search}&format=json`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = runCall;