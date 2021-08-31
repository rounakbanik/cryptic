const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function vigenere(text, key, operation) {

    // Convert text and key to lowercase
    text = text.toLowerCase();
    key = key.toLowerCase();

    // Construct Vigenere key
    key = key.repeat(Math.floor(text.length / key.length)) + key.slice(0, text.length % key.length);

    // Construct output
    let output = '';

    for (let i = 0; i < text.length; i++) {
        let caesar_shift = alphabets.indexOf(key[i])
        let alphabet_pos = alphabets.indexOf(text[i])

        let op_char;

        if (alphabet_pos === -1 || caesar_shift === 0) op_char = text[i];
        else {
            if (operation === 'encrypt') {
                op_char = alphabets[(caesar_shift + alphabet_pos) % 26]
            }
            else if (operation === 'decrypt') {
                caesar_shift = caesar_shift * -1;
                op_char = alphabets[(alphabets.length + alphabet_pos + caesar_shift) % 26];
            }
        }

        output = output + op_char;
    }

    return output;




}

export default vigenere;