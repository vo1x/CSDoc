import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Navbar></Navbar>
          <Routes>
            <Route element={<Home />} path="/"></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
