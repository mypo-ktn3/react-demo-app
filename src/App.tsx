import './App.css';
import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=4bb3ce0ee4aa4a949e1145116232405&q=London&aqi=no").then(res => res.json()).then(data => console.log(data))
  }
  return (
    <div className="test">
      <Title cityName={city}/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results />
    </div>
  );
}

export default App;
