// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // weather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#252933";
      document.body.style.color = "#fbfcfa";
      showAlert("Dark mode has been enabled !", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = "Hello";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Bye";
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "#fbfcfa";
      document.body.style.color = "#252933";
      showAlert("Light mode has been enabled !", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar headerText="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */} {/*default navbar here...*/}
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Capatilize text" mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
