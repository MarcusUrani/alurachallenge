import { useNavigate } from "react-router-dom";
import Button from "../button";
import "./style.css";

const EditModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate("/manage-items");
    setIsModalOpen(false);
  };
  return (
    <section className="modal__section">
      <section className="modal">
        <span className="modal__text">Produto editado com sucesso!</span>
        <section className="modal__buttons">
          <Button
            nameClass={"blue__button"}
            children={"Ok"}
            onClickFunction={handleEdit}
          />
        </section>
      </section>
    </section>
  );
};

export default EditModal;
