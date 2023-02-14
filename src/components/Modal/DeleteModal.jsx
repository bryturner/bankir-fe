import FormModal from "./FormModal";

function DeleteModal({ showModal, setShowModal, handleConfirmClick }) {
  const text =
    "Deleting your account will delete your information from the database. Are you sure you would like to do this?";

  return (
    <FormModal
      showModal={showModal}
      setShowModal={setShowModal}
      confirmText={text}
      confirmButtonText="Confirm"
      handleConfirmClick={handleConfirmClick}
    />
  );
}

export default DeleteModal;
