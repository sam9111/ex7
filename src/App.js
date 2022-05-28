const css = `
    header {
      margin: 50px;
    }

    h1 {
      font-size: 5em;
      color: white;
    }

    q {
      font-size: 1.5em;
      margin: 20px;

    }

    div.skew {
      animation-name: example2;
      animation-duration: 5s;
    }

    @keyframes example2 {
      from {
        transform: skew(-100deg);
      }

      to {
        transform: skew(0deg);
      }
    }

    div.gallery {
      margin: 50px;
      padding: 50px;
      border: 1px solid white;
      float: left;
      display: flex;
      width: 200px;
      justify-items: center;
    }

    div.gallery:hover {
      border: 0px;
      transform: translate(0px, -20px);
      transition-timing-function: linear;
      transform: scale(1.5, 1.5);
      z-index: 2;
    }

    div.gallery img {
      width: 100%;
      height: auto;
    }

    div.desc {
      padding: 15px;
      text-align: center;
    }

`;

function App() {
  return (
    <div>
      <style>{css}</style>

      <div className="skew">
        <q>
          Enthusiastic CS undergrad hoping to pay it back forward to the society
          through product innovation, design and teaching.
        </q>
      </div>

      <div className="gallery">
        <a target="_blank" href="assets/img_waves.jpg">
          <img
            src="assets/img_waves.jpg"
            alt="Waves"
            width="300"
            height="200"
          />
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="assets/img_sunset.jpg">
          <img
            src="assets/img_sunset.jpg"
            alt="Sunset"
            width="300"
            height="200"
          />
        </a>
      </div>

      <div className="gallery">
        <a target="_blank" href="assets/img_mountains.jpg">
          <img
            src="assets/img_mountains.jpg"
            alt="Mountains"
            width="300"
            height="200"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
