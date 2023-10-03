/**
 * Performs a Wikipedia search using the given input.
 * @param {Object} input - The input object containing the search query.
 * @param {string} input.search - The search query.
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 */
const fetch = require("node-fetch");

const runCall = async (input) => {
  const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${input.search}&format=json`);
  const data = await response.json();
  console.log(data);
  return data;
};

module.exports = runCall;