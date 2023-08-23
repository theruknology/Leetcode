// Problem #767
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const freq_map = {};
  for (let x = 0; x < s.length; x++) {
    if (freq_map[s.charAt(x)] == undefined) {
      freq_map[s.charAt(x)] = 1;
    } else {
      freq_map[s.charAt(x)]++;
    }
  }

  
};