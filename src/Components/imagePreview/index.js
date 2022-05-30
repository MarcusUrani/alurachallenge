import "./style.css";

const ImagePreview = ({ image }) => {
  return (
    <>
      <img
        src={image}
        alt="Imagem adicionada"
        className="new--product__image--added"
      />
    </>
  );
};

export default ImagePreview;
