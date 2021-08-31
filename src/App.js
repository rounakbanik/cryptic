import { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from './components/Header';
import Output from "./components/Output";
import caesar from "./ciphers/caesar";
import monosubstitution from "./ciphers/monosubstitution";
import vigenere from "./ciphers/vigenere";

function App() {

  const [firstSubmit, setFirstSubmit] = useState(false);
  const [outputData, setOutputData] = useState({});

  const formSubmitHandler = (data) => {
    if (!firstSubmit) setFirstSubmit(true);

    let func;
    if (data.cipher === 'caesar') func = caesar;
    else if (data.cipher === 'monosubstitution') func = monosubstitution;
    else func = vigenere;

    data.text = func(data.text, data.key, data.operation);
    setOutputData(data);

  }


  return (
    <Fragment>
      <Header />
      <div className='text-center p-4 m-5 w-full max-w-2xl mx-auto'>
        <Form onFormSubmit={formSubmitHandler} />
        {firstSubmit && <Output outputData={outputData} />}
      </div>
    </Fragment>
  );
}

export default App;
