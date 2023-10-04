import 'tachyons'
import React, { useState } from 'react';
import QRCode from './qrcode';

function Input() {
    const [inputValue, setInputValue] = useState('');
    const [qrCodeContent, setQRCodeContent] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setQRCodeContent(inputValue);
    };

    return (
        <div className="pa1 inputDiv">
            {/* <h2 className='white tc d-none'>QR CODE</h2> */}
            <div className='input flex flex-row pa2 ba b--white'>
                <input
                    className='bn white bg-transparent w-60'
                    type="text"
                    placeholder='Enter a link ot text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='white generateButton w-40' onClick={handleButtonClick}>
                    QR code
                </button>
            </div>
            <QRCode qrCodeContent={qrCodeContent} />
        </div>
    );
}

export default Input;