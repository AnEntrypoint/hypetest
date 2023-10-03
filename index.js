const axios = require("axios");

const runCall = async (input) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${input.apiKey}&cx=${input.cx}&q=${input.search}`);
    return {
      data: response.data
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = runCall;