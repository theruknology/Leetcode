var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }
    var stacker = [];
    var opposite = { "(": ")", "{": "}", "[": "]" };
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stacker.unshift(s[i]);
        }
        else {
            if (s[i] !== opposite[stacker[0]]) {
                return false;
            }
            else {
                stacker.shift();
            }
        }
    }
    if (stacker.length === 0) {
        return true;
    }
    return false;
};
