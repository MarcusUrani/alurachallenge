import { useNavigate } from "react-router-dom";
import "./style.css";

const EditModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  return (
    <section className="modal__section">
      <section className="modal">
        <span className="modal__text">Produto editado com sucesso!</span>
        <section className="modal__buttons">
          <button
            className="modal__button no__button"
            onClick={() => {
              navigate("/manage-items");
              setIsModalOpen(false);
            }}
          >
            Ok
          </button>
        </section>
      </section>
    </section>
  );
};

export default EditModal;
