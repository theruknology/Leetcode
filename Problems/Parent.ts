const isValid = (s: string): boolean => {
  if (s.length % 2 === 1) {
    return false;
  }

  const stacker: string[] = [];
  const opposite = { "(": ")", "{": "}", "[": "]" }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stacker.unshift(s[i]);
    } else {
      if (s[i] !== opposite[stacker[0]]) {
        return false;
      } else {
        stacker.shift();
      }
    }
  }

  if (stacker.length === 0) {

    return true;
  }
  return false;
}