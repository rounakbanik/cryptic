import ReactTooltip from "react-tooltip";

import { Fragment, useEffect, useRef } from "react";

function Output(props) {

    const copyHandler = () => {
        console.log('copied');
        navigator.clipboard.writeText(props.outputData.text);
    }

    const outputRef = useRef(null);

    const isEncryption = props.outputData.operation === 'encrypt';

    useEffect(() => {
        const executeScroll = () => outputRef.current.scrollIntoView();
        executeScroll();
    })

    return (
        <Fragment>
            <div className='text-green-400 mt-16 max-w-full w-96 mx-auto border-2 border-green-400 p-4'>
                <h2 className='text-xl uppercase mb-2'>
                    Output
                    <button data-tip data-for='copyTip'
                        onClick={copyHandler}
                        className='text-sm px-2 border border-yellow-200 text-yellow-200 mx-2'>Copy</button>
                    <ReactTooltip event='click'
                        globalEventOff='click'
                        id='copyTip'
                        isCapture={true}
                        afterShow={() => { setTimeout(ReactTooltip.hide, 1000) }}>Copied!</ReactTooltip>
                </h2>

                <p>{props.outputData.text}</p>
            </div>
            {isEncryption && <div>
                <button className='mt-6 text-blue-400 p-2 border border-blue-400'>
                    <a target='_blank' rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${props.outputData.text}`}>Tweet this</a>
                </button>
            </div>}
            <div ref={outputRef}></div>
        </Fragment>
    )
}

export default Output;