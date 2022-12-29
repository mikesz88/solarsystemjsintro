import { data } from '../data/data';

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const discoveryYear = {};
  data.asteroids.map((asteroid) => {
    const year = asteroid.discoveryYear;
    discoveryYear[year] = discoveryYear[year] ? discoveryYear[year] + 1 : 1;
  });

  return +Object.keys(discoveryYear).reduce((a, b) =>
    discoveryYear[a] > discoveryYear[b] ? a : b
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
