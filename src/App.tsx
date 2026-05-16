import { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import './App.css'

interface MarsWeather {
  sol: number
  avgTemp: number
  maxTemp: number
  minTemp: number
  pressure: number
  windSpeed: number
  sunDuration: number
  season: string
  terrestrial_date: string
}

function App() {
  const [weatherData, setWeatherData] = useState<MarsWeather | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_KEY = import.meta.env.VITE_NASA_API_KEY

  useEffect(() => {
    fetchMarsWeather()
  }, [])

  const fetchMarsWeather = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await axios.get('https://api.nasa.gov/insight_as_service/instruments/temperatures', {
        params: {
          api_key: API_KEY,
          feedtype: 'json'
        }
      })

      // Parse the latest weather data
      if (response.data && Object.keys(response.data).length > 0) {
        const latestSol = Math.max(...Object.keys(response.data).map(Number).filter(k => !isNaN(k)))
        const latestData = response.data[latestSol]

        if (latestData && latestData.AT && latestData.PRE) {
          const weather: MarsWeather = {
            sol: latestSol,
            avgTemp: Math.round(latestData.AT.av),
            maxTemp: Math.round(latestData.AT.mx),
            minTemp: Math.round(latestData.AT.mn),
            pressure: Math.round(latestData.PRE.av),
            windSpeed: latestData.HWS ? Math.round(latestData.HWS.av) : 0,
            sunDuration: 0,
            season: latestData.Season || 'Unknown',
            terrestrial_date: latestData.terrestrial_date || 'N/A'
          }
          setWeatherData(weather)
        }
      }
    } catch (err) {
      console.error('Error fetching Mars weather:', err)
      setError('Failed to fetch Mars weather data. Please check your API key and internet connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🔴 Mars Weather Station</h1>
        <p>Real-time weather data from NASA's Insight Lander</p>
      </header>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Connecting to Mars...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={fetchMarsWeather}>Retry</button>
        </div>
      )}

      {weatherData && (
        <main className="main-content">
          <div className="weather-container">
            <WeatherCard weather={weatherData} />
          </div>

          <div className="info-section">
            <h2>Current Sol #{weatherData.sol}</h2>
            <p className="date">Terrestrial Date: {weatherData.terrestrial_date}</p>
            <p className="season">Season: {weatherData.season}</p>

            <div className="details-grid">
              <div className="detail-item">
                <span className="label">Average Temperature</span>
                <span className="value">{weatherData.avgTemp}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">Max Temperature</span>
                <span className="value">{weatherData.maxTemp}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">Min Temperature</span>
                <span className="value">{weatherData.minTemp}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">Pressure</span>
                <span className="value">{weatherData.pressure} Pa</span>
              </div>
              <div className="detail-item">
                <span className="label">Wind Speed</span>
                <span className="value">{weatherData.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        </main>
      )}

      <footer className="footer">
        <p>Data provided by NASA's InSight Mars Lander</p>
        <p>
          <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">
            NASA API Documentation
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
