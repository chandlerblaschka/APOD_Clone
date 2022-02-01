import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import SlideShow from './components/SlideShow';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';

function App() {
  let [message, setMessage] = useState('APOD Test')
  let [data, setData] = useState([])

  const fetchURL = 'https://api.nasa.gov/planetary/apod?api_key=n4OgjMD6zJCIVd8UTP4bIMstVg07VmxE5Tcl3ApZ&count=5'

  useEffect(() => {
    document.title = `APOD`
    const fetchData = async () => {
      const response = await fetch(fetchURL)
      const resData = await response.json()
      if (resData.length > 0) {
        setData(resData)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <NavBar />
      {message}
      <Routes>
        <Route exact path="/" element={<SlideShow data={data} />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
