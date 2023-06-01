import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import loadable from "react-loadable";

const Loading = () => <h3>Loading Wait...</h3>;
const Home = loadable({
  loader: () => import(/* webpackChunkName:'HomePage' */ "./Pages/Home"),
  loading: Loading,
});

const About = loadable({
  loader: () => import(/* webpackChunkName:'AboutPage' */ "./Pages/About"),
  loading: Loading,
});

const Contact = loadable({
  loader: () => import(/* webpackChunkName:'ContactPage' */ "./Pages/Contact"),
  loading: Loading,
});

function App() {
  return (
    <div className="App">
      <div className="divClass">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </div>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
