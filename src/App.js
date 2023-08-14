// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";

// COMPONENTS
import Cities from "./Components/Cities";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cities" element={<Index/>}/>
          </Routes>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
