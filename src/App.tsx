
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Header/Header';
import Home from './Home/HomePage';
import Portfolio from './Portfolio/Portfolio';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
