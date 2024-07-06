import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Project from "./Project";
import NotFound from "./NotFound";
import Bathroom from "./Bathroom";
import BadRoom from "./BadRoom";
import Kitchen from "./Kitchen";
import Living from "./Living";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <div>
            <NavLink to="/">
              <img src="/logo.png" alt="loading" />
            </NavLink>
          </div>

          <div>
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/Services"
                >
                  Services
                </NavLink>
              </li>
              <li style={{ margin: "0 10px" }}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#C76904" : "#292F36",
                  })}
                  to="/Project"
                >
                  Project
                </NavLink>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a href="#">Blog</a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a href="#">Contact</a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <button>
                  <img src="/search.png" alt="loading" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Project/*" element={<Project />}>
            <Route path="Bathroom" element={<Bathroom />} />
            <Route path="Bedroom" element={<BadRoom />} />
            <Route path="Kitchen" element={<Kitchen />} />
            <Route path="Living" element={<Living />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
