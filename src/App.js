import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Conway } from "./components/Conway";
import { About } from "./components/About";
import { Arrays } from "./components/Arrays";
import { Stacks } from "./components/Stacks";
import { NavbarComponent as Nav } from "./components/Nav";
import { NextLargest } from "./components/stack/NextLargest";
import { MaxSumSubarray } from "./components/array/MaxSumSubarray";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/array" element={<Arrays />} />
          <Route path="stack" element={<Stacks />} />
          <Route path="stack/nextLargest" element={<NextLargest />} />
          <Route path="array/maxSumSubarray" element={<MaxSumSubarray />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
