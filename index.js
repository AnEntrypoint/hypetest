/**
 * Executes a function, input object returns.
 *
 * @param {object} input - The input object to be logged and returned.
 * @returns {object} The same input object that was provided as a parameter.
 */
const runCall = (input)=>{
  console.log(input)
  return input
}

module.exports = runCall
