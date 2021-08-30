import { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from './components/Header';
import Output from "./components/Output";

function App() {

  const [firstSubmit, setFirstSubmit] = useState(false);
  const [outputData, setOutputData] = useState({});

  const formSubmitHandler = (data) => {
    if (!firstSubmit) setFirstSubmit(true);
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
