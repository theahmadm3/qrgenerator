import React, { useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

import download from '../images/download.svg';
import 'tachyons'

function QR(props) {
    const { qrCodeContent } = props;
    const qrCodeRef = useRef(null);

    const handleDownloadClick = () => {
        if (qrCodeRef.current) {
            html2canvas(qrCodeRef.current).then((canvas) => {

                const dataUrl = canvas.toDataURL('image/jpg');

                // Create a temporary link element to trigger the download
                const a = document.createElement('a');
                a.href = dataUrl;
                a.download = 'qrcode.jpg';
                a.click();
            });
        }
    };

    return (
        <div className="qr pa1">
            <h2 className='white tc'>Generated QR Code</h2>
            <div className='center mb4 qrContainer flex flex-column justify-around ba b--light-gray w-80'>
                <div ref={qrCodeRef} className='pa3 bg-white flex-grow-0  center br4 ba b--light-gray w-fc w-80'>
                    {qrCodeContent && (
                        <QRCode value={qrCodeContent} />
                    )}
                </div>
            </div>
            <div className='buttons pa2 flex flex-row justify-between'>
                <button className='white flex items-center space-x-2' onClick={handleDownloadClick}>
                    <img src={download} alt="" />
                    <span>Download</span>
                </button>

                <button className='white'>Share</button>
            </div>
        </div>
    );
}

export default QR;