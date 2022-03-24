import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ItemDescription from "./Pages/ItemDescription";
import AddNewItem from "./Pages/AddNewItem";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:slug/:slug" element={<ItemDescription />} />
        <Route path="/manage-items" element={<AddNewItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
