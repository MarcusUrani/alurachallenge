import React, { useState } from "react";
import "./style.css";
import Logo from "../../Assets/images/Logo.png";
import { useFormik } from "formik";
import FooterLink from "../footerLink";
import FooterForm from "../footerForm";

const Footer = ({ loggedIn }) => {
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
    },
  });

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "O campo não pode estar em branco";
    } else if (values.name.length < 3) {
      errors.name = "O campo deve ter no mínimo 3 caracteres";
    } else if (values.name.length > 40) {
      errors.name = "O campo deve ter no máximo 40 caracteres";
    }

    if (!values.message) {
      errors.message = "O campo não pode estar em branco";
    } else if (values.message.length < 5) {
      errors.message = "O campo deve ter no mínimo 5 caracteres";
    } else if (values.message.length > 120) {
      errors.message = "O campo deve ter no máximo 120 caracteres";
    }

    return errors;
  };

  return (
    <footer>
      <section className="footer__container">
        <section className="footer__content">
          <img className="footer__logo" src={Logo} alt="Logo AluraGeek" />
          <nav className="footer__links">
            <FooterLink href="/" children={"Quem somos nós"} />
            <FooterLink href="/" children={"Política de privacidade"} />
            <FooterLink href="/" children={"Programa de fidelidade"} />
            <FooterLink href="/" children={"Nossas lojas"} />
            <FooterLink href="/" children={"Quero ser franqueado"} />
            <FooterLink
              href={loggedIn === true ? "/manage-items" : "/login"}
              children={"Anuncie aqui"}
            />
          </nav>
        </section>
        <FooterForm
          error={error}
          setError={setError}
          disabled={disabled}
          setDisabled={setDisabled}
          formik={formik}
          validate={validate}
        />
      </section>
      <section className="footer__copyright">
        <h3 className="footer__copyright--title">
          Desenvolvido por Marcus Urani
        </h3>
        <p className="footer__copyright--text">2022</p>
      </section>
    </footer>
  );
};

export default Footer;
