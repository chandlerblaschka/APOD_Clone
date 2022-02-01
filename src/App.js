import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GalleryItem from "./components/GalleryItem";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GalleryItem />
    </div>
  );
}

export default App;
