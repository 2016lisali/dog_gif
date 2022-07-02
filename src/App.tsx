import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Home from './component/Home';
import MoreDogs from './component/MoreDogs';
import Result from './component/Result';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center vh-100 ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/more" element={<MoreDogs />} />
        </Routes>
        <Footer />
      </Router>     
    </div>
  );
}

export default App;
