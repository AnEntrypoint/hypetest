/**
 * Performs a Google Custom Search API call.
 * @param {Object} input - The input object.
 * @param {string} input.search - The search query.
 * @returns {Promise<Object>} - A promise that resolves to the response data object.
 */
const runCall = async (input) => {
  try {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&q=${input.search}`);
    const data = await response.json();
    return {
      data
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = runCall;