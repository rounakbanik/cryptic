function caesar(text, key, operation) {

    // Define characters that will be encrypted
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    // Convert key to number (sanity check)
    key = +key;

    // Convert key to negative counterpart for decryption
    if (operation === 'decrypt') key = key * -1;

    // Convert text to lowercase
    text = text.toLowerCase();


    // Construct mapping between plaintext and ciphertext
    let mapping = {};

    for (let i = 0; i < alphabets.length; i++) {

        let tKey = i + key;

        if (tKey >= alphabets.length) tKey = tKey % alphabets.length;
        else if (tKey < 0) tKey = alphabets.length + tKey;

        mapping[alphabets[i]] = alphabets[tKey];
    }

    // Construct final output based on mapping
    let output = '';

    for (let char of text) {
        if (alphabets.includes(char)) output = output + mapping[char];
        else output = output + char;
    }

    return output;

}

export default caesar;