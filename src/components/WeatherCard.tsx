import { CSSProperties } from 'react'
import './WeatherCard.css'

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

interface WeatherCardProps {
  weather: MarsWeather
}

function WeatherCard({ weather }: WeatherCardProps) {
  // Color based on temperature: blue for cold, red for warmer
  const getTempColor = (temp: number) => {
    if (temp < -100) return '#00d4ff' // Deep blue
    if (temp < -80) return '#0099ff'
    if (temp < -60) return '#ff6600'
    return '#ff3300' // Red
  }

  const tempColor = getTempColor(weather.avgTemp)

  const cardStyle: CSSProperties = {
    borderTopColor: tempColor,
  }

  return (
    <div className="weather-card" style={cardStyle}>
      <div className="card-header">
        <h2>Current Conditions</h2>
        <div className="planet-icon">🔴</div>
      </div>

      <div className="temperature-display">
        <div className="temp-main">{weather.avgTemp}°C</div>
        <div className="temp-label">Average Temperature</div>
      </div>

      <div className="conditions-bar">
        <div className="condition">
          <span className="condition-icon">📈</span>
          <span className="condition-value">{weather.maxTemp}°C</span>
          <span className="condition-label">High</span>
        </div>
        <div className="condition">
          <span className="condition-icon">📉</span>
          <span className="condition-value">{weather.minTemp}°C</span>
          <span className="condition-label">Low</span>
        </div>
        <div className="condition">
          <span className="condition-icon">💨</span>
          <span className="condition-value">{weather.windSpeed} m/s</span>
          <span className="condition-label">Wind</span>
        </div>
      </div>

      <div className="pressure-gauge">
        <div className="gauge-label">Atmospheric Pressure</div>
        <div className="gauge-bar">
          <div 
            className="gauge-fill" 
            style={{ width: `${Math.min(100, (weather.pressure / 1000) * 100)}%` }}
          ></div>
        </div>
        <div className="gauge-value">{weather.pressure} Pa</div>
      </div>

      <div className="card-footer">
        <p>Sol {weather.sol}</p>
        <p>{weather.season}</p>
      </div>
    </div>
  )
}

export default WeatherCard
