import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editApi } from "../../api";
import validate from "../../validation";
import EditModal from "../../Components/editModal";
import "./style.css";
import Button from "../../Components/button";

const EditItem = ({ products }) => {
  const params = useParams();
  const [item, setItem] = useState();
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [itemValues, setItemValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    setErrors(validate(itemValues));
  };

  useEffect(() => {
    const itemById = products.find((product) => product.id === params.slug);
    setItem(itemById);

    setIsModalOpen(false);

    if (item) {
      setproductName(item.name);
      setproductPrice(item.price);
      setproductDescription(item.description);
    } else {
      setproductName("");
      setproductPrice("");
      setproductDescription("");
    }

    setItemValues({
      productName,
      productPrice,
      productDescription,
    });
  }, [
    params.slug,
    products,
    item,
    productName,
    productPrice,
    productDescription,
  ]);

  return (
    <main className="main__edit">
      <section className="main__edit__container">
        <article className="main__edit__content">
          <h1 className="main__edit__title">Editar Item</h1>
        </article>
        {item ? (
          <img
            className="main__edit__image"
            src={`/assets/images/${item.image}.png`}
            alt={item.alt}
          />
        ) : null}
        <form
          className="main__edit__form"
          onSubmit={async (event) => {
            event.preventDefault();
            if (Object.keys(errors).length === 0) {
              setIsModalOpen(true);
              await editApi("items", item);
            }
          }}
        >
          <TextField
            onChange={(event) => {
              const value = event.target.value;
              setproductName(value);
              item.name = value;
            }}
            fullWidth
            label="Nome do produto"
            type="text"
            variant="filled"
            value={item ? productName : ""}
          />
          {errors.productName ? (
            <span className="main__edit__error">{errors.productName}</span>
          ) : null}
          <TextField
            onChange={(event) => {
              const value = event.target.value;
              setproductPrice(value);
              item.price = value;
            }}
            fullWidth
            label="Preço do produto"
            type="number"
            variant="filled"
            value={item ? productPrice : ""}
          />
          {errors.productPrice ? (
            <span className="main__edit__error">{errors.productPrice}</span>
          ) : null}
          <TextField
            onChange={(event) => {
              const value = event.target.value;
              setproductDescription(value);
              item.description = value;
            }}
            fullWidth
            label="Descrição do produto"
            type="text"
            variant="filled"
            value={item ? productDescription : ""}
          />
          {errors.productDescription ? (
            <span className="main__edit__error">
              {errors.productDescription}
            </span>
          ) : null}
          <Button
            children={"Confirmar edição"}
            nameClass="blue__button full__width"
            onClickFunction={handleSubmit}
            buttonType={"submit"}
          />
        </form>
      </section>
      {isModalOpen ? <EditModal setIsModalOpen={setIsModalOpen} /> : null}
    </main>
  );
};

export default EditItem;
