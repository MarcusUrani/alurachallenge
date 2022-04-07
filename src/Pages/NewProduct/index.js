import React, { useEffect, useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import NewProductForm from "../../Components/newProductForm";
import AddImageSection from "../../Components/addImageSection";

const NewProduct = () => {
  const [gadgetName, setGadgetName] = useState("computador");
  const [helperText, setHelperText] = useState(
    "Arraste para adicionar uma imagem para o produto"
  );
  const [image, setImage] = useState("");
  const [error, setError] = useState({});

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productDescription: "",
    },
  });

  const validate = (values) => {
    const errors = {};
    if (!values.productName) {
      errors.productName = "É necessário informar o nome do produto";
    } else if (values.productName.length < 3) {
      errors.productName = "O nome do produto deve ter no mínimo 3 caracteres";
    } else if (values.productName.length > 20) {
      errors.productName = "O nome do produto deve ter no máximo 20 caracteres";
    }

    if (!values.productDescription) {
      errors.productDescription = "A descrição do produto é obrigatória";
    } else if (values.productDescription.length > 150) {
      errors.productDescription =
        "A descrição do produto deve ter no máximo 150 caracteres";
    }

    if (!values.productPrice) {
      errors.productPrice = "O preço do produto é obrigatório";
    } else if (isNaN(values.productPrice)) {
      errors.productPrice = "O preço do produto deve ser um número";
    }

    return errors;
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
          setImage(file);
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
    }
    if (window.innerWidth < 950) {
      setGadgetName("tablet");
      setHelperText("Arraste para adicionar uma imagem para o produto");
    }
    if (window.innerWidth < 550) {
      setHelperText("Adicione uma imagem");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", verifyWindowSize);
  }, []);

  return (
    <main className="new--product">
      <section className="new--product__container">
        <article className="new--product__header">
          <h1 className="new--product__title">Adiconar novo produto</h1>
        </article>
        <AddImageSection
          dropHandler={dropHandler}
          dragOverHandler={dragOverHandler}
          setImage={setImage}
          helperText={helperText}
          gadgetName={gadgetName}
          setHelperText={setHelperText}
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
        />
      </section>
    </main>
  );
};

export default NewProduct;
