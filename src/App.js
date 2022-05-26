import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import ItemDescription from "./Pages/ItemDescription";
import ManageItems from "./Pages/ManageItems";
import Page404 from "./Pages/Page404";
import { fetchApi } from "./api";
import { useEffect, useState } from "react";
import NewProduct from "./Pages/NewProduct";
import AllProducts from "./Pages/AllProducts";
import EditItem from "./Pages/EditItem";

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
      <Header data={data} loggedIn={loggedIn} />
      <Routes>
        <Route path="/" exact element={<Main products={data} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/product/:slug"
          element={<ItemDescription products={data} />}
        />
        <Route
          path="/manage-items"
          element={<ManageItems items={data} setItems={setData} />}
        />
        <Route path="/new-product" element={<NewProduct items={data} />} />
        <Route path="/products" element={<AllProducts products={data} />} />
        <Route path="/edit-item/:slug" element={<EditItem products={data} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer loggedIn={loggedIn} />
    </Router>
  );
}

export default App;
