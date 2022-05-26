import React, { useEffect, useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import NewProductForm from "../../Components/newProductForm";
import AddImageSection from "../../Components/addImageSection";
import validate from "../../validation";

const NewProduct = ({ items }) => {
  const [gadgetName, setGadgetName] = useState("computador");
  const [helperText, setHelperText] = useState(
    "Arraste para adicionar uma imagem para o produto"
  );
  const [image, setImage] = useState("");
  const [error, setError] = useState({});
  const [mobile, setMobile] = useState(false);
  const [lastItemId, setLastItemId] = useState(0);
  const newItem = {
    id: lastItemId + 1,
    name: "",
    price: "",
    description: "",
    image: image,
    slug: "items",
    alt: "item image",
    miniature: image,
    tag: "#111111",
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
    },
  });

  const readImageAsDataUrl = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleNewItemValues = (values) => {
    newItem.name = values.productName;
    newItem.price = values.productPrice;
    newItem.description = values.productDescription;

    items.push(newItem);
  };

  const dropHandler = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (
          event.dataTransfer.items[i].kind === "file" &&
          event.dataTransfer.items[i].type.match(/^image\//)
        ) {
          let file = event.dataTransfer.items[i].getAsFile();
          readImageAsDataUrl(file);
          setHelperText("Imagem adicionada com sucesso");
        } else {
          setHelperText("Arraste apenas imagens");
        }
      }
    }
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const verifyWindowSize = () => {
    if (window.innerWidth < 1024) {
      setGadgetName("computador");
      setHelperText("Arraste para adicionar uma imagem para o produto");
      setMobile(false);
    }
    if (window.innerWidth < 950) {
      setGadgetName("tablet");
      setHelperText("Arraste para adicionar uma imagem para o produto");
      setMobile(false);
    }
    if (window.innerWidth < 590) {
      setHelperText("Adicione uma imagem");
      setMobile(true);
    }
  };

  useEffect(() => {
    verifyWindowSize();
    window.addEventListener("resize", verifyWindowSize);
    const getLastItemId = () => {
      const lastItem = items.length > 0 ? items[items.length - 1] : null;
      setLastItemId(lastItem ? lastItem.id : 0);
    };

    getLastItemId();
  }, [items, setLastItemId, lastItemId]);

  return (
    <main className="new--product">
      <section className="new--product__container">
        <article className="new--product__header">
          <h1 className="new--product__title">Adicionar novo produto</h1>
        </article>
        <AddImageSection
          dropHandler={dropHandler}
          dragOverHandler={dragOverHandler}
          setImage={setImage}
          helperText={helperText}
          gadgetName={gadgetName}
          setHelperText={setHelperText}
          readImage={readImageAsDataUrl}
          mobile={mobile}
        />
        {!image ? (
          <span className="new--product__error">
            É necessário adicionar uma imagem
          </span>
        ) : (
          <span className="new--product__success">
            Imagem adicionada com sucesso
          </span>
        )}
        <NewProductForm
          error={error}
          formik={formik}
          validate={validate}
          setError={setError}
          image={image}
          addNewItem={handleNewItemValues}
          setImage={setImage}
        />
      </section>
      {/* {image ? <img src={image} alt="" /> : null} */}
    </main>
  );
};

export default NewProduct;
