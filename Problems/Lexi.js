// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

const isAlienSorted = (words, order) => {
  let sorted = true;

  // HashMap Implementation
  const hashArray = {};
  for (let i = 0; i < order.length; i++) {
    hashArray[order[i]] = i;
  }

  const isLesser = (w1, w2) => {
    // checks if w1 is lesser
    let sortedw = true;
    if (w1 === w2) {
      return sortedw;
    }
    const smallerLen = w1.length < w2.length ? w1.length : w2.length;
    for (let n = 0; n < smallerLen; n++) {
      if (hashArray[w2[n]] !== hashArray[w1[n]]) {
        if (hashArray[w2[n]] - hashArray[w1[n]] > 0) {
          return sortedw;
        }
        if (hashArray[w2[n]] - hashArray[w1[n]] < 0) {
          return false;
        }
      }
    }
    if (w1.includes(w2)) {
      return false;
    }

    return sortedw;
  };

  for (let m = 0; m < words.length - 1; m++) {
    if (!isLesser(words[m], words[m + 1])) {
      return false;
    }
  }
  return sorted;
};

const answer = isAlienSorted(
  ["hi", "larbon", "elementary"],
  "hlabcdefgijkmnopqrstuvwxyz"
);
