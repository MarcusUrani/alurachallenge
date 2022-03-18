import "./App.css";
import {
  BrowserRouter as Router,
  // Route,
  // Routes as Switch,
} from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <Header />
      {/* <Route path="/" exact component={Home} /> */}
      <Footer />
    </Router>
  );
}

export default App;
