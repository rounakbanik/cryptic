import { useState } from "react";

function Form(props) {

    const [cipher, setCipher] = useState('caesar');
    const [cipherKey, setCipherKey] = useState('');
    const [operation, setOperation] = useState('encrypt')
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState(false);

    const isCaesar = cipher === 'caesar';

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setError(false);

        // Do form validation
        const ciphers = ['caesar', 'monosubstitution', 'vigenere'];
        const operations = ['encrypt', 'decrypt']

        if (!ciphers.includes(cipher) || !operations.includes(operation) || inputText.trim().length === 0) {
            setError(true);
            return;
        }

        if (cipher === 'caesar') {
            const keyNum = +cipherKey;
            if (!keyNum || keyNum < 1 || keyNum > 25 || !Number.isInteger(keyNum)) {
                setError(true);
                return;
            }
        }

        // Construct form submission dictionary
        const data = {
            cipher: cipher,
            operation: operation,
            key: cipherKey,
            text: inputText,
        }

        // Submit data
        props.onFormSubmit(data);
    }

    const cipherChangeHandler = (e) => {
        setCipher(e.target.value);
    }

    const keyChangeHandler = (e) => {
        setCipherKey(e.target.value);
    }

    const operationChangeHandler = (e) => {
        setOperation(e.target.value);
    }

    const textChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    const keyText = isCaesar ? '(Number between 1 and 25)' : '(A string of alphabets)';

    return (

        <div>
            <form onSubmit={formSubmitHandler}>

                <div className='m-4'>
                    <div className='mb-2'>
                        <label htmlFor="cipher">Choose Cipher:</label>
                    </div>
                    <select name="cipher" onChange={cipherChangeHandler} value={cipher}
                        className='focus:ring-2 focus:ring-white focus:outline-none focus:border-black'>
                        <option value="caesar">Caesar</option>
                        <option value="monosubstitution">Monosubstitution</option>
                        <option value="vigenere">Vigenere</option>
                    </select>
                </div>

                <div className='m-4'>
                    <div className='mb-2'>
                        <label htmlFor="cipherKey">Key {keyText}:</label>
                    </div>
                    {!isCaesar && <input type='text' name="cipherKey" onChange={keyChangeHandler} value={cipherKey} className='focus:ring-2 focus:ring-white focus:outline-none focus:border-black' required />}
                    {isCaesar && <input type='number'
                        name="cipherKey"
                        className='focus:ring-2 focus:ring-white focus:outline-none focus:border-black'
                        min="1" max="25" step="1"
                        required
                        value={cipherKey}
                        onChange={keyChangeHandler} />}
                </div>

                <div className='m-4'>
                    <div className='mb-2'>
                        <label htmlFor="operation">Choose Operation:</label>
                    </div>
                    <select name="operation" onChange={operationChangeHandler} value={operation}
                        className="focus:ring-2 focus:ring-white focus:outline-none focus:border-black">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                </div>

                <div className='m-4'>
                    <div className='mb-2'>
                        <label htmlFor="inputText">Enter {operation === 'encrypt' ? 'Plain Text' : 'Cipher Text'}</label>
                    </div>
                    <textarea name="inputText" rows="6" cols="30" value={inputText} onChange={textChangeHandler}
                        className='focus:ring-2 focus:ring-white focus:outline-none focus:border-black max-w-full w-96' />
                </div>

                {error && <p className='text-red-600'>Form submission failed. Check your inputs and try again!</p>}

                <div className='m-4'>
                    <button type='submit' className='py-2 px-6 text-white border-2 hover:border-neon hover:text-neon'>Go</button>
                </div>
            </form>
        </div>


    )
}

export default Form;