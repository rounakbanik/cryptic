// Define characters that need to be encrypted
const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Function to sanitize key
function removeDuplicateCharacters(string) {
    return string
        .toLowerCase()
        .split('')
        .filter((item, pos, self) => {
            return self.indexOf(item) === pos && alphabets.includes(item);
        })
        .join('');
}

function monosubstitution(text, key, operation) {

    // Remove duplicate and non-alphabetic characters from key and conver to lowercase
    key = removeDuplicateCharacters(key).split('');

    // Construct mapping
    let mappedAlphabets = [...key];
    let mapping = {};

    for (let alphabet of alphabets) {
        if (!mappedAlphabets.includes(alphabet)) {
            mappedAlphabets.push(alphabet);
        }
    }

    if (operation === 'encrypt') {
        alphabets.forEach((item, pos) => {
            mapping[item] = mappedAlphabets[pos]
        })
    }

    else if (operation === 'decrypt') {
        mappedAlphabets.forEach((item, pos) => {
            mapping[item] = alphabets[pos]
        })
    }

    // Convert input text to lowercase
    text = text.toLowerCase();

    // Construct final output based on mapping
    let output = '';

    for (let char of text) {
        if (alphabets.includes(char)) output = output + mapping[char];
        else output = output + char;
    }

    return output;
}

export default monosubstitution;