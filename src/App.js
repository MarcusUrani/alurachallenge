import "./App.css";
import {
  BrowserRouter as Router,
  // Route,
  // Routes as Switch,
} from "react-router-dom";
import Header from "./Components/header";

function App() {
  return (
    <Router>
      <Header />
      {/* <Route path="/" exact component={Home} /> */}
    </Router>
  );
}

export default App;
