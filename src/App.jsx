import "./App.css";
import ConfessionCard from "./component/ConfessionCard";
import Navbar from "./component/Navbar";
import AddConfession from "./pages/AddConfession";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Feed />
      <AddConfession />
    </>
  );
}

export default App;
