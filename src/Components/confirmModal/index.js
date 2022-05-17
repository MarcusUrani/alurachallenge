import "./style.css";

const ConfirmModal = ({
  modalText,
  setOpenDeleteModal,
  handleDeleteItem,
  itemId,
}) => {
  return (
    <section className="modal__section">
      <section className="modal">
        <span className="modal__text">{modalText}</span>
        <section className="modal__buttons">
          <button
            className="modal__button no__button"
            onClick={() => {
              setOpenDeleteModal(false);
            }}
          >
            Não
          </button>
          <button
            className="modal__button yes__button"
            onClick={() => {
              setOpenDeleteModal(false);
              handleDeleteItem(itemId);
            }}
          >
            Sim
          </button>
        </section>
      </section>
    </section>
  );
};

export default ConfirmModal;
