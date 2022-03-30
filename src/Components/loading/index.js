import React from "react";
import "./style.css";
import LoadingGif from "../../Assets/images/loading.gif";

const Loading = () => {
  return (
    <section className="loading">
      <img
        src={LoadingGif}
        alt="Gif pac man amarelo comendo bolinhas vermelhas para simbolizar o carregamento"
        className="loading__gif"
      />
      <p className="loading__text">Carregando...</p>
    </section>
  );
};

export default Loading;
