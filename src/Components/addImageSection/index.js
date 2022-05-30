import React from "react";
import ImageAddPreview from "../imageAddButton";
import ImagePreview from "../imagePreview";
import MobileImageSection from "../mobileImageSection";
import "./style.css";

const AddImageSection = ({
  dropHandler,
  dragOverHandler,
  helperText,
  gadgetName,
  setHelperText,
  image,
  readImage,
  mobile,
}) => {
  return (
    <section className="new--product__add--image">
      {mobile === false ? (
        <section
          className="new--product__add--image__container"
          onDrop={(event) => dropHandler(event)}
          onDragOver={(event) => dragOverHandler(event)}
        >
          {image ? (
            <ImagePreview image={image} />
          ) : (
            <>
              <img
                className="new--product__image"
                src="/assets/images/image.svg"
                alt="adicione uma imagem"
              />
              <p className="new--product__image--add">{helperText}</p>
            </>
          )}
        </section>
      ) : (
        <MobileImageSection
          helperText={helperText}
          readImage={readImage}
          setHelperText={setHelperText}
        />
      )}

      <p className="new--product__text"> Ou </p>
      <section className="new--product__image__input">
        <ImageAddPreview
          readImage={readImage}
          setHelperText={setHelperText}
          gadgetName={gadgetName}
        />
      </section>
    </section>
  );
};

export default AddImageSection;
