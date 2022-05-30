import { useNavigate } from "react-router-dom";
import Button from "../button";
import "./style.css";

const EditModal = ({ setIsModalOpen, navigateSlug, modalText }) => {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(navigateSlug);
    setIsModalOpen(false);
  };
  return (
    <section className="modal__section">
      <section className="modal">
        <span className="modal__text">{modalText}</span>
        <section className="modal__buttons">
          <Button
            nameClass={"blue__button"}
            children={"Ok"}
            onClickFunction={handleCloseModal}
          />
        </section>
      </section>
    </section>
  );
};

export default EditModal;
