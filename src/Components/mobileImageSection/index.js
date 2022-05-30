import "./style.css";

const MobileImageSection = ({ helperText, readImage, setHelperText }) => {
  return (
    <section className="new--product__add--image__mobile">
      <label
        className="new--product__add--image__mobile--container"
        for="add__image"
      >
        <img
          className="new--product__image__mobile"
          src="/assets/images/image.svg"
          alt=""
        />
        <p className="new--product__add--image__mobile--text">{helperText}</p>
      </label>
      <input
        id="add__image"
        className="new--product__button__mobile"
        type={"file"}
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          readImage(file);
          setHelperText("Imagem adicionada com sucesso");
        }}
      />
    </section>
  );
};

export default MobileImageSection;
