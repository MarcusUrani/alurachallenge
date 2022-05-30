import "./style.css";

const ImageAddPreview = ({ gadgetName, readImage, setHelperText }) => {
  return (
    <>
      <label className="new--product__label" for="add__image">
        Procure no seu {gadgetName}
      </label>
      <input
        id="add__image"
        className="new--product__button"
        type={"file"}
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          readImage(file);
          setHelperText("Imagem adicionada com sucesso");
        }}
      />
    </>
  );
};

export default ImageAddPreview;
