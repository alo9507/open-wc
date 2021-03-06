const path = require('path');
const storiesPatternsToFiles = require('./storiesPatternsToFiles');
const toBrowserPath = require('./toBrowserPath');

/**
 * Lists all files using the specified glob, starting from the given root directory.
 *
 * Will return all matching urls.
 */
module.exports = async function storiesPatternsToUrls(storiesPatterns, rootDir) {
  const arrayOfFilesArrays = await storiesPatternsToFiles(storiesPatterns, rootDir);
  return arrayOfFilesArrays.map(filePath => {
    const relativeFilePath = path.relative(rootDir, filePath);
    return `/${toBrowserPath(relativeFilePath)}`;
  });
};
