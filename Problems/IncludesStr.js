// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

const checkInclusion = (s1, s2) => {
  const hashArray = {};
  for (x of s1) {
    if (hashArray[x] !== undefined) {
      hashArray[x]++;
      continue;
    }
    hashArray[x] = 1;
  }

  const checkWind = (i) => {
    const duplicateHash = {...hashArray};
    for (let f = 0; f < s1.length; f++) {
      if (duplicateHash[s2[i + f]] === undefined || duplicateHash[s2[i + f]] <= 0) {
        return false;
      }
      duplicateHash[s2[i + f]]--;
    }
    return true;
  };

  for (let i = 0; i < s2.length; i++) {
    if (hashArray[s2[i]] !== undefined) {
      if (checkWind(i)) {
        return true;
      }
    }
  }

  return false;
};

checkInclusion("pple", "applbeez")