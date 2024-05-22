
import { Route, Routes } from 'react-router-dom'; 
import Header from './Header/Header';
import Home from './Home/HomePage';
import Portfolio from './Portfolio/Portfolio';

const App = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
  );
};

export default App;
