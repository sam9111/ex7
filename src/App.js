import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <div class="skew">
        <q>
          Enthusiastic CS undergrad hoping to pay it back forward to the society
          through product innovation, design and teaching.
        </q>
      </div>

      <div class="gallery">
        <a target="_blank" href="assets/img_waves.jpg">
          <img
            src="assets/img_waves.jpg"
            alt="Waves"
            width="300"
            height="200"
          />
        </a>
      </div>

      <div class="gallery">
        <a target="_blank" href="assets/img_sunset.jpg">
          <img
            src="assets/img_sunset.jpg"
            alt="Sunset"
            width="300"
            height="200"
          />
        </a>
      </div>

      <div class="gallery">
        <a target="_blank" href="assets/img_mountains.jpg">
          <img
            src="assets/img_mountains.jpg"
            alt="Mountains"
            width="300"
            height="200"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default App;
