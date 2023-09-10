import React, { useState} from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [width, setWidth] = useState("");
  const [type, setType] = useState("");
  const [allowed, setAllowed] = useState(false);

  return (
    <div style = {{margin : "2% auto", display : "flex", flexDirection : "column", border : "2px solid black", padding : "1%"}}>
      <div>
        <label>
          Enter Text
          <input
            type="text"
            value={inputText}
            onChange={(e) => {setInputText(e.target.value);setAllowed(true)}}
            style={{margin : '5px'}}
          />
        </label>
      </div>
      <div>
        <label>
          Width (px):
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            style={{margin : '5px'}}
          />
        </label>
      </div>
      <div>
        <label>
          Download Format:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
          </select>
        </label>
      </div>
      <button style={{margin : '5px'}} disabled = {!allowed} >Generate QR Code</button>
      {allowed && (<div style={{ width : `${width+10}`, border : '2px solid black'}}>
      <QRCode
        value={inputText}
        size={width}
      />
      </div>)}
    </div>
  );
};

export default QRCodeGenerator;
