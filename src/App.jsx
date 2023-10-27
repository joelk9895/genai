import "./App.css";
import ConfessionCard from "./component/ConfessionCard";
import Navbar from "./component/Navbar";
import AddConfession from "./pages/AddConfession";
import Feed from "./pages/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Feed} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
