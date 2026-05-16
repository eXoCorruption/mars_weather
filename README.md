# 🔴 Mars Weather Station

A beautiful, real-time Mars weather application built with React and Vite. Displays current weather data from NASA's InSight Mars Lander.

## Features

- 🌡️ Real-time temperature data (average, max, min)
- 💨 Wind speed monitoring
- 📊 Atmospheric pressure gauge
- 📍 Current Martian sol (day) information
- 🎨 Modern, responsive UI with glassmorphism design
- ⚡ Fast and optimized with Vite
- 🚀 Deployed on GitHub Pages

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A NASA API key (get one free at https://api.nasa.gov/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mars_weather.git
cd mars_weather
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your NASA API key to `.env`:
```
VITE_NASA_API_KEY=your_actual_api_key_here
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building

Build for production:
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Deploying to GitHub Pages

### Automatic Deployment (GitHub Actions)

1. Push your code to GitHub
2. Go to your repository settings → Pages
3. Set the source to "GitHub Actions"
4. The workflow will automatically build and deploy

### Manual Deployment

```bash
npm run deploy
```

This command builds the project and deploys it to GitHub Pages using gh-pages.

## Project Structure

```
mars_weather/
├── src/
│   ├── components/
│   │   ├── WeatherCard.tsx
│   │   └── WeatherCard.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

## API

This project uses NASA's InSight API endpoint:
- **Endpoint**: `https://api.nasa.gov/insight_as_service/instruments/temperatures`
- **Data**: Temperature, pressure, and wind data from Mars

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations
- **GitHub Pages** - Hosting

## Features in Detail

### Weather Card
- Displays current average temperature with color-coded gradient
- Shows high/low temperatures and wind speed
- Atmospheric pressure visualized with a progress gauge
- Floating animation for the Mars emoji

### Responsive Design
- Mobile-friendly layout
- Adapts to different screen sizes
- Touch-friendly interface

### Error Handling
- Graceful error messages if API fails
- Retry button to refresh data
- Loading spinner while fetching data

## Future Enhancements

- [ ] Historical weather data and charts
- [ ] Multiple rovers/landers data
- [ ] Weather alerts and notifications
- [ ] Daily forecast for Mars
- [ ] Dark/Light theme toggle
- [ ] Weather comparison with Earth
- [ ] Share weather data functionality

## Environment Variables

Create a `.env` file with:
```
VITE_NASA_API_KEY=your_nasa_api_key
```

Don't commit the `.env` file! It's listed in `.gitignore`.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

- Data provided by [NASA's InSight Mars Lander](https://mars.nasa.gov/insight/)
- NASA API: https://api.nasa.gov/
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## Troubleshooting

### "API Key Error"
- Verify your API key is correct in `.env`
- Check that the key hasn't expired or hit rate limits
- Try getting a new key from https://api.nasa.gov/

### "No data displayed"
- Check your internet connection
- Open browser DevTools (F12) and check the Console for errors
- Verify the NASA API is currently active

### Build errors
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Try `npm run build` to see detailed error messages

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include error messages and steps to reproduce

---

**Made with ❤️ and 🔴 for Mars enthusiasts!**
