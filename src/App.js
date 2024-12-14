import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes/routes'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar/>
            {routes}
        </div>
      </div>
    </Router>
  );
}

export default App;
