import Button from "../button";
import "./style.css";

const ConfirmModal = ({
  modalText,
  setOpenDeleteModal,
  handleDeleteItem,
  itemId,
}) => {
  const handleConfirm = () => {
    handleDeleteItem(itemId);
    setOpenDeleteModal(false);
  };

  const handleCancel = () => {
    setOpenDeleteModal(false);
  };

  return (
    <section className="modal__section">
      <section className="modal">
        <span className="modal__text">{modalText}</span>
        <section className="modal__buttons">
          <Button
            children={"Não"}
            nameClass={"transparent__button"}
            onClickFunction={handleCancel}
          />
          <Button
            children={`Sim`}
            nameClass={`blue__button`}
            onClickFunction={handleConfirm}
          />
        </section>
      </section>
    </section>
  );
};

export default ConfirmModal;
