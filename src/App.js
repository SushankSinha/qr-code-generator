import QRCodeGenerator from "./QrCodeGen";

function App() {
  return (
    <div style = {{margin : "2% auto", display : "flex", flexDirection : "column"}} className="App">
    <h1 style = {{margin : "2% auto", display : "block"}}>QR Code Generator</h1>
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
