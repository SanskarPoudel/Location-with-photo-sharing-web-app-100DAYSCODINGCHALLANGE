import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Users/>} />
        <Route path="/places/new" element={<NewPlace/>} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
