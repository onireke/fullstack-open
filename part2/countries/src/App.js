import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const handleFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  console.log(countriesToShow.length);

  return (
    <div className="App">
      find countries <input value={searchFilter} onChange={handleFilter} />
      <DisplayFilter
        countriesToShow={countriesToShow}
        setSearchFilter={setSearchFilter}
      />
    </div>
  );
}

const DisplayFilter = ({ countriesToShow, setSearchFilter }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (countryName) => {
    console.log(countryName);
    const apiKey = "22817cfe8aafaf49b19c16a224977fa6";
    let countryWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
    axios
      .get(countryWeatherEndpoint)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    fetchWeather(country.name.common);

    const languages = Object.values(country.languages);
    const flag = country.flags.png;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital}</div>
        <div>Population {country.population}</div>
        <h1>Languages</h1>
        <ul>
          {languages.map((language) => (
            <li key={country.name.common}>{language}</li>
          ))}
        </ul>

        <img src={flag} alt={country.name.common} />
        {weather !== null && (
          <div>
            <h1>weather in {weather.name}</h1>
            <p>temperature {weather.main.temp} Celcius</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="cloud-icon"
            />
            <h4>wind {weather.wind.speed} m/s</h4>
          </div>
        )}
      </div>
    );
  }
  if (countriesToShow.length > 10)
    return <div>Too many countries matches, specify another filter</div>;
  return countriesToShow.map((country) => (
    <div key={country.name.common}>
      {country.name.common}{" "}
      <button
        value={country.name.common}
        onClick={(e) => setSearchFilter(e.target.value)}
      >
        show
      </button>
    </div>
  ));
};

export default App;
