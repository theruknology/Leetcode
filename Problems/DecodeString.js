// You are given an encoded string s. 
// Given an integer k, return the kth letter (1-indexed) in the decoded string.

const decodeAtIndex = (s, k) => {
    let resString = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(+s[i])) {
            // if it's a number
            const repString = resString;

            for (let f = 0; f < (+s[i] - 1); f++) {
                // resString = resString+repString;
                resString = `${resString}${repString}`;
            }
            continue
        } 
        resString += s[i];
    }

    console.log(resString)
    return resString[k-1];
}

const decodeAtIndex2 = (s, k) => {
    let resString = [];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(+s[i])) {
            // if it's a number
            const repString = resString.join("");

            for (let f = 0; f < (+s[i] - 1); f++) {
                resString.push(repString);
            }
            continue
        } 
        resString.push(s[i]);
    }

    const result = resString.join("");
    console.log(result)
    return result[k-1];
}

const decodeAtIndex3 = (s, k) => {
        let length = 0;
    let i = 0;

    while (length < k) {
        if (!isNaN(s[i])) {
            length *= Number(s[i]);
        } else {
            length++;
        }
        i++;
    }

    for (let j = i - 1; j >= 0; j--) {
        if (!isNaN(s[j])) {
            length /= Number(s[j]);
            k %= length;
        } else {
            if (k === 0 || k === length) {
                return s[j];
            }
            length--;
        }
    }

    return "";
}


decodeAtIndex2("hel2oo3", 5);
