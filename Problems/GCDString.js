// In this problem, we are looking for the Greatest Common Divisor of two strings, which for convenience we will consider as the GCD string.

const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  let gcd = 1;
  for (let i = 1; i <= str1.length && i <= str2.length; i++) {
    if (str1.length % i == 0 && str2.length % i == 0) {
      gcd = i;
    }
  }
  return str1.slice(0, gcd);
};
