import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherApp1 from './pages/WeatherApp1';
import WeatherApp2 from './pages/WeatherApp2';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather1" element={<WeatherApp1 />} />
            <Route path="/weather2" element={<WeatherApp2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;