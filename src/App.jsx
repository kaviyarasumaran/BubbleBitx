import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';


function App() {

  return (
    <Router>
      <Routes path="/main/*">
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
