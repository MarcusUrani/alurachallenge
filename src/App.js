import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ItemDescription from "./Pages/ItemDescription";
import AddNewItem from "./Pages/AddNewItem";
import fetchApi from "./api";
import { useEffect, useState } from "react";
import NewProduct from "./Pages/NewProduct";

function App() {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchItems = async () => {
    const items = await fetchApi("items");
    setData(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Router>
      <Header data={data} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/:slug/:slug" element={<ItemDescription />} />
        <Route path="/manage-items" element={<AddNewItem />} />
        <Route path="/new-product" element={<NewProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
