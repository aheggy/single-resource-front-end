// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// PAGES
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour"


// COMPONENTS

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cities" element={<Index/>} />
            <Route path="/cities/:id" element={<Show />} />
            <Route path="/cities/new" element={<New />} />
            <Route path="/cities/:id/edit" element={<Edit />} />
            <Route path="/*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
